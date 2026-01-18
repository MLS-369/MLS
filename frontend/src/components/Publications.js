import React from "react";
import "../styles/Publications.css";
import {  useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Publications = () => {
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  
  return (
    <div className={`publications-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="publications-header">
        <h1>Our Publications</h1>
        <p>Browse research papers and publications authored by our experts.</p>
      </div>
      <div className="publications-list coming-soon">
        <div className="coming-soon-content">
          <h2>Coming Soon</h2>
          <p>We are currently curating our latest legal research and publications. Check back soon for insightful content.</p>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="back-button-container">
        <button className="back-btn" onClick={() => navigate('/')}>
           Back
        </button>
      </div>
    </div>
  );
};

export default Publications;
