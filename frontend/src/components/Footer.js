import React from "react";
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import "../styles/Footer.css";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return (
    <footer className={`footer ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>MLS&Co</h3>
            <p>
              "Delivering comprehensive legal solutions with integrity, expertise, and a commitment to your success."
            </p>
            <div className="footer-social">
              <Facebook className="footer-social-icon" />
              <Twitter className="footer-social-icon" />
              <Linkedin className="footer-social-icon" />
            </div>
          </div>
          <div className="footer-section abbrcard">
            <h4 className="abbr">
              <span className="M M-letter">M</span>antle
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#about">Our Firm</a>
              </li>
              <li>
                <a href="#people">Our People</a>
              </li>
              <li>
                <a href="#awards">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="footer-section abbrcard">
            <h4 className="abbr">
              <span className="M L-letter">L</span>egacy
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#practice">Practice Areas</a>
              </li>
            </ul>
          </div>
          <div className="footer-section abbrcard">
            <h4 className="abbr">
              <span className="M S-letter">S</span>cholarly
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/publications">Publications</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact-section">
          <h4>CONTACT US</h4>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={20} className="footer-contact-icon" />
                <span>
                  D.No. 12-203/6/2/57, 2nd floor, MLS Avenue, near Rainbow
                  villas, Navodaya colony, Tadepalli, Guntur district
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone size={20} className="footer-contact-icon" />
                <span>+91 7989879735</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={20} className="footer-contact-icon" />
                <span>mlslaw.contact@gmail.com</span>
              </div>
            </div>
            <div className="footer-map">
              {/* Added target="_blank" and rel="noopener noreferrer" */}
              <a
                href="https://maps.app.goo.gl/SpJhoJyydbWDTvJm6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/final_map.png" alt="Map of Firm" className="map" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
