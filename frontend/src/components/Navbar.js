import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon, Infinity } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import b_1 from "../b_1.png";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(true);

  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (!closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(Infinity);
    }
    setIsAcademicsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsAcademicsOpen(false), Infinity);
    setCloseTimeout(timeout);
  };

  // Function to handle navigation to home page sections
  const handleSectionNavigation = (sectionId) => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on different page, navigate to home with section
      navigate(`/#${sectionId}`);
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav
      className={`navbar ${isDarkTheme ? "dark-theme" : "light-theme"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="#home" className="navbar-logo" onClick={() => navigate("/")}>
            <img src={b_1} className="logo" alt="logo" />
            <div className="logoname">
              <p className="first">MLS & Co</p>
              <p className="last">LAW FIRM</p>
            </div>
          </a>

          <div className="navbar-menu">
            <Link to="/legacy">Legacy</Link>
            <button
              className="navbar-section-link"
              onClick={() => handleSectionNavigation("practice")}
            >
              Practice Areas
            </button>
            <button
              className="navbar-section-link"
              onClick={() => handleSectionNavigation("people")}
            >
              Our People
            </button>
            <Link to="/careers">Careers</Link>

            <div
              className="navbar-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseEnter}
            >
              <button className="navbar-dropdown-btn">
                Academics <ChevronDown size={16} />
              </button>
              {isAcademicsOpen && (
                <div
                  className="navbar-dropdown-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/newsletters">Newsletters</Link>
                  <Link to="/publications">Publications</Link>
                  <Link to="/events">Events</Link>
                </div>
              )}
            </div>

            <button
              className="navbar-section-link"
              onClick={() => handleSectionNavigation("contact")}
            >
              Contact Us
            </button>
          </div>

          <div className="navbar-actions">
            {/* ✅ Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="navbar-theme-btn"
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* ✅ Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="navbar-mobile-menu">
            <button
              className="navbar-mobile-link"
              onClick={() => handleSectionNavigation("about")}
            >
              About Us
            </button>
            <button
              className="navbar-mobile-link"
              onClick={() => handleSectionNavigation("practice")}
            >
              Practice Areas
            </button>
            <button
              className="navbar-mobile-link"
              onClick={() => handleSectionNavigation("people")}
            >
              Our People
            </button>
            <Link to="/careers" onClick={() => setIsOpen(false)}>
              Careers
            </Link>

            <details className="mobile-dropdown">
              <summary>Academics</summary>
              <div className="mobile-dropdown-menu">
                <Link to="/blogs" onClick={() => setIsOpen(false)}>
                  Blogs
                </Link>
                <Link to="/newsletters" onClick={() => setIsOpen(false)}>
                  Newsletters
                </Link>
                <Link to="/publications" onClick={() => setIsOpen(false)}>
                  Publications
                </Link>
                <Link to="/events" onClick={() => setIsOpen(false)}>
                  Events
                </Link>
              </div>
            </details>

            <button
              className="navbar-mobile-link"
              onClick={() => handleSectionNavigation("contact")}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
