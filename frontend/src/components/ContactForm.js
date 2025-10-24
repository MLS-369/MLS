import React, { useState } from 'react';
import axios from "axios";
import '../styles/ContactForm.css';
import { useTheme } from './ThemeContext';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    disputeType: '',
    flexibleHours: '',
    query: ''
  });
  const { isDarkTheme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      query: formData.query,
      dispute: formData.disputeType,
      freetime: formData.flexibleHours
    };

    try {
      const res = await axios.post('http://localhost:5000/form', postData);
      console.log(res.data);
      alert(res.data.message);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        disputeType: '',
        flexibleHours: '',
        query: ''
      });
    } catch (err) {
      console.error(err);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <section className={`contact-form ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id='contact'>
      <div className="contact-form-container">
        <h2 className="contact-form-title">Get in Touch</h2>
        <form className="contact-form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="fullName">Name</label>
            <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-field full">
            <label htmlFor="email">Email (optional)</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
          </div>
          <div className="form-field full">
            <label htmlFor="query">Query</label>
            <textarea id="query" name="query" rows="4" value={formData.query} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="disputeType">Type of Dispute</label>
            <select id="disputeType" name="disputeType" value={formData.disputeType} onChange={handleChange} required>
              <option value="">Select type</option>
              <option value="civil">Civil</option>
              <option value="criminal">Criminal</option>
              <option value="corporate">Corporate</option>
              <option value="intellectual-property">Intellectual Property</option>
              <option value="family">Family</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="flexibleHours">Flexible Hours to Contact</label>
            <input id="flexibleHours" name="flexibleHours" type="text" value={formData.flexibleHours} onChange={handleChange} placeholder="e.g., 10am - 2pm, weekdays" />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
