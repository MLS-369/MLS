import React from "react";
import { Link } from "react-router-dom";
import "../styles/Ourpeople.css";

const OurPeople = () => {
  return (
    <section className="our-people" id="people">
      <h2 className="our-people-heading">Our Partners</h2>
      <div className="our-people-images">
        <img
          src="https://via.placeholder.com/150"
          alt="Partner 1"
          className="partner-image"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Partner 2"
          className="partner-image"
        />
      </div>
      <div className="our-people-link">
        <Link to="/team">Our Team</Link>
      </div>
    </section>
  );
};

export default OurPeople;
