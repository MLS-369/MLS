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
      <div className="publications-list">
        <div className="publication-card">
          <h2>Legal Research Paper 2025</h2>
          <p>An in-depth study on constitutional law trends.</p>
          <button className="read-more">Read More</button>
        </div>
        <div className="publication-card">
          <h2>Corporate Law Review</h2>
          <p>Highlights of corporate legal developments in 2025.</p>
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

export default Publications;
