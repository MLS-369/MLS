const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Parser } = require("json2csv");
require("dotenv").config();
const AWS = require("aws-sdk");

// ----------------------
// AWS S3 CONFIG
// ----------------------
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
});

// ----------------------
// MODELS
// ----------------------
const Form = require("./models/Form");
const Application = require("./models/Application");

const app = express();
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://your-frontend-name.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

// ----------------------
// MONGODB CONNECTIONS
// ----------------------
const mongoURLForm = process.env.MONGO_URI_FORM;
const mongoURLCareer = process.env.MONGO_URI_CAREERS;

// Old Form DB
const formConnection = mongoose.createConnection(mongoURLForm);
const FormModel = formConnection.model("Form", Form.schema);

// Careers Form DB
const careerConnection = mongoose.createConnection(mongoURLCareer);
const ApplicationModel = careerConnection.model("Application", Application.schema);

// Logs
formConnection.on("connected", () => console.log("Form DB connected"));
careerConnection.on("connected", () => console.log("Career DB connected"));
formConnection.on("error", err => console.error("Form DB error:", err));
careerConnection.on("error", err => console.error("Career DB error:", err));

// ----------------------
// MULTER CONFIG (MEMORY STORAGE)
// ----------------------
const upload = multer({
  storage: multer.memoryStorage(),
});

// ----------------------
// S3 UPLOAD HELPER
// ----------------------
const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: `internships/${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const result = await s3.upload(params).promise();
  return result.Location; // Public S3 URL
};

// ----------------------
// ROUTE 1: Old Form + CSV
// ----------------------
app.post("/form", async (req, res) => {
  try {
    const { name, phone, email, query, dispute, freetime } = req.body;
    const time = new Date();

    const newForm = new FormModel({
      name,
      phone,
      email,
      query,
      dispute,
      freetime,
      time,
    });

    const savedForm = await newForm.save();

    // CSV LOGIC
    const clientQueryDir = path.join(__dirname, "clientquery");
    if (!fs.existsSync(clientQueryDir)) fs.mkdirSync(clientQueryDir);

    const csvFile = path.join(clientQueryDir, "forms.csv");
    const fields = ["name", "phone", "email", "query", "dispute", "freetime", "time"];
    const parser = new Parser({
      fields,
      header: !fs.existsSync(csvFile),
    });

    const csv = parser.parse([savedForm.toObject()]);
    fs.appendFileSync(csvFile, csv + "\n");

    res.status(201).json({
      message: "Form submitted successfully",
      data: savedForm,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

// ----------------------
// ROUTE 2: Careers Form (S3 Uploads)
// ----------------------
const cpUpload = upload.fields([
  { name: "cv", maxCount: 1 },
  { name: "researchSample", maxCount: 1 },
  { name: "marksSheet", maxCount: 1 },
  { name: "draftSample", maxCount: 1 },
]);

app.post("/career", cpUpload, async (req, res) => {
  try {
    const body = req.body;
    const files = req.files;

    const cvUrl = files.cv ? await uploadToS3(files.cv[0]) : null;
    const researchSampleUrl = files.researchSample
      ? await uploadToS3(files.researchSample[0])
      : null;
    const marksSheetUrl = files.marksSheet
      ? await uploadToS3(files.marksSheet[0])
      : null;
    const draftSampleUrl = files.draftSample
      ? await uploadToS3(files.draftSample[0])
      : null;

    const newApplication = new ApplicationModel({
      fullName: body.fullName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      residentialAddress: body.residentialAddress,
      college: body.college,
      course: body.course,
      yearOfStudy: body.yearOfStudy,
      coverLetter: body.coverLetter,
      disputeType: body.disputeType,
      preferredMode: body.preferredMode,
      cgpa: body.cgpa,
      cvUrl,
      researchSampleUrl,
      marksSheetUrl,
      draftSampleUrl,
    });

    const savedApplication = await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully",
      data: savedApplication,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

// ----------------------
// HEALTH CHECK (ALB)
// ----------------------
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
