import React from "react";
import "../styles/Newsletter.css";
import {  useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Newsletters = () => {
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  
  return (
    <div className={`newsletters-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="newsletters-header">
        <h1>Our Newsletters</h1>
        <p>Stay updated with the latest legal insights and firm updates.</p>
      </div>
      <div className="newsletters-list">
        <div className="newsletter-card">
          <h2>Newsletter Jan 2025</h2>
          <p>Highlights of legal trends and key events in January 2025.</p>
          <button className="read-more">Read More</button>
        </div>
        <div className="newsletter-card">
          <h2>Newsletter Feb 2025</h2>
          <p>Insights on landmark cases and academic updates.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      
<div className="back-button-container">
  <button className="back-btn" onClick={() => navigate('/')}>
    &larr; Back
  </button>
</div>

    </div>
  );
};

export default Newsletters;
