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
        <div className="blog-card featured">
          <div className="blog-card-meta">
            <div className="card-tag">New</div>
            <span className="read-time">12 min read</span>
          </div>
          <h2>Cybercrime Without Borders: Navigating International Legal Conflicts</h2>
          <p>
            Explore the complexities of digital jurisdiction and how traditional legal systems struggle in a borderless virtual environment.
          </p>
          <button className="read-more" onClick={() => navigate("/blog/cybercrime")}>
            Read Full Article
          </button>
        </div>

        {/* <div className="blog-card">
          <h2>Understanding Corporate Law Reforms</h2>
          <p>
            Recent changes in corporate law have significant implications for
            businesses. Learn what you need to know.
          </p>
          <button className="read-more" onClick={() => navigate("/blog/corporate-reforms")}>
            Read More
          </button>
        </div> */}

        {/* <div className="blog-card">
          <h2>Women’s Rights and Legal Awareness</h2>
          <p>
            Discover how recent initiatives and legal reforms are empowering
            women across various sectors.
          </p>
          <button className="read-more" onClick={() => navigate("/blog/womens-rights")}>
            Read More
          </button>
        </div> */}
      </div>
      <div className="back-button-container">
  <button className="back-btn" onClick={() => navigate('/')}>
     Back
  </button>
</div>
    </div>
  );
};

export default Blogs;
