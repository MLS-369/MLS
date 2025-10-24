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
      <div className="events-list">
        <div className="event-card">
          <h2>Law Seminar 2025</h2>
          <p>A seminar discussing recent legal reforms and landmark cases.</p>
          <button className="read-more">Register</button>
        </div>
        <div className="event-card">
          <h2>Workshop on Corporate Law</h2>
          <p>Interactive workshop for law students and professionals.</p>
          <button className="read-more">Register</button>
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

export default Events;
