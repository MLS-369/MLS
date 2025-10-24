import React from "react";
import "../styles/Block.css";
import {  useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Blogs = () => {
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  
  return (
    <div className={`blogs-container ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="blogs-header">
        <h1>Our Blogs</h1>
        <p>Explore insights, opinions, and updates from our legal experts.</p>
      </div>

      <div className="blogs-list">
        <div className="blog-card">
          <h2>Understanding Corporate Law Reforms</h2>
          <p>
            Recent changes in corporate law have significant implications for
            businesses. Learn what you need to know to stay compliant.
          </p>
          <button className="read-more">Read More</button>
        </div>

        <div className="blog-card">
          <h2>Women’s Rights and Legal Awareness</h2>
          <p>
            Discover how recent initiatives and legal reforms are empowering
            women across various sectors.
          </p>
          <button className="read-more">Read More</button>
        </div>

        <div className="blog-card">
          <h2>Environmental Law: A Global Perspective</h2>
          <p>
            How nations are aligning their laws to tackle global environmental
            challenges.
          </p>
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

export default Blogs;
