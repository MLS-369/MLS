const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Parser } = require("json2csv");

const Form = require("./models/Form"); // old form
const Application = require("./models/Application"); // careers form

const app = express();
app.use(cors());
app.use(express.json());

// ----------------------
// SERVE INTERNSHIPS FOLDER
// ----------------------
app.use("/internships", express.static(path.join(__dirname, "internships"))); 
// Files can now be accessed at: http://localhost:5000/internships/<filename>

// ----------------------
// MONGODB CONNECTIONS
// ----------------------
const mongoURLForm = "mongodb+srv://praneethkollipara7:Issues@clientissues.fr33uzy.mongodb.net/";
const mongoURLCareer = "mongodb+srv://praneethkollipara7:Internships@internsapplied.uuokqhr.mongodb.net/";

// Old Form DB
const formConnection = mongoose.createConnection(mongoURLForm, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const FormModel = formConnection.model("Form", Form.schema);

// Careers Form DB
const careerConnection = mongoose.createConnection(mongoURLCareer, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const ApplicationModel = careerConnection.model("Application", Application.schema);

// ----------------------
// MULTER CONFIG (careers)
// ----------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "internships");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir); // auto-create folder if not exists
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // store with timestamp + original name
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ----------------------
// ROUTE 1: Old Form + CSV
// ----------------------
app.post("/form", async (req, res) => {
  try {
    const { name, phone, email, query, dispute, freetime } = req.body;
    const time = new Date();

    const newForm = new FormModel({ name, phone, email, query, dispute, freetime, time });
    const savedForm = await newForm.save();

    console.log("New form:", savedForm);

    // ----------------------
    // CSV LOGIC (clientquery folder)
    // ----------------------
    const clientQueryDir = path.join(__dirname, "clientquery");
    if (!fs.existsSync(clientQueryDir)) fs.mkdirSync(clientQueryDir);

    const csvFile = path.join(clientQueryDir, "forms.csv");
    const fields = ["name", "phone", "email", "query", "dispute", "freetime", "time"];
    const parser = new Parser({ fields, header: !fs.existsSync(csvFile) });
    const csv = parser.parse([savedForm.toObject()]);

    fs.appendFileSync(csvFile, csv + "\n");

    res.status(201).json({ message: "Form submitted successfully", data: savedForm });
  } catch (err) {
    console.log(err.message)
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ----------------------
// ROUTE 2: Careers Form
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

    const getFileUrl = (fileArray) => fileArray ? `http://localhost:5000/internships/${fileArray[0].filename}` : null;

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
      cvUrl: getFileUrl(files.cv),
      researchSampleUrl: getFileUrl(files.researchSample),
      marksSheetUrl: getFileUrl(files.marksSheet),
      draftSampleUrl: getFileUrl(files.draftSample),
    });

    const savedApplication = await newApplication.save();
    console.log("New career application:", savedApplication);

    res.status(201).json({ message: "Application submitted successfully", data: savedApplication });
    
  } catch (err) {
    console.log(err.message)
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ----------------------
// API-3: View File from internships
// ----------------------
app.get("/file", (req, res) => {
  const fileName = req.query.name;
  if (!fileName) return res.status(400).send("File name is required");

  const filePath = path.join(__dirname, "internships", fileName);
  res.sendFile(filePath, (err) => {
    if (err) res.status(404).send("File not found");
  });
});

// ----------------------
app.listen(5000, () => console.log("Server running on port 5000"));
