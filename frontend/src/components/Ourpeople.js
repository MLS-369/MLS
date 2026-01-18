import React from "react";
import { Link } from "react-router-dom";
import "../styles/Ourpeople.css";
import { useTheme } from "./ThemeContext";

const OurPeople = () => {
  const { isDarkTheme } = useTheme();
  
  const partners = [
    {
      name: "Dr. Sattaru Rajani",
      designation: "Managing Director",
      image: "/swaroop.png" // Using logo as placeholder for now
    },
    {
      name: "Dr. Mojjada Ramakrishna",
      designation: "District and Sessions Judge (Retd.)",
      image: "/swaroop.png" // Using logo as placeholder for now
    }
  ];

  return (
    <section className={`our-people ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="people">
      <div className="our-people-container">
        <h2 className="our-people-heading">Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-image-container">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partner-image"
                />
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-designation">{partner.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="our-people-link">
          <Link to="/team" className="view-team-btn">View Full Team</Link>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
