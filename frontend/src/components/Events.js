import React from "react";
import "../styles/Events.css";
import {  useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Events = () => {
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  
  return (
    <div className={`events-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p>Join us for seminars, workshops, and conferences organized by MLS&Co.</p>
      </div>
      <div className="events-list coming-soon">
        <div className="coming-soon-content">
          <h2>Coming Soon</h2>
          <p>We are currently planning our upcoming seminars and workshops. Stay tuned for updates on our upcoming events.</p>
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

export default Events;
