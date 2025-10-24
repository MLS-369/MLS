import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import {Link} from 'react-router-dom';
import { useTheme } from './ThemeContext';

const About = () => {
  const aboutRef = useRef(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const aboutSection = aboutRef.current;

    const options = {
      threshold: 0.1, // triggers when 20% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('active');
        } else {
          aboutSection.classList.remove('active'); // remove if you want reset on scroll out
        }
      });
    }, options);

    if (aboutSection) observer.observe(aboutSection);

    // cleanup on unmount
    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section id="about" className={`about ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div ref={aboutRef} className="about-container">
          <div className="about-text">
            <h2>Our Firm</h2>
            <p>
              MLS&Co is a premier full-service law Firm in India, built on a
              foundation of excellence and integrity. We partner with clients to
              navigate complex legal and business landscapes, providing innovative
              solutions that address immediate challenges while creating long-term
              value. Our multidisciplinary team offers deep expertise across
              Corporate Law, Civil Law, Criminal Law, Dispute Resolution, Intellectual Property, and much more,
              combining local insight with a global perspective.
            </p>
            <p>
              Collaboration is central to our approach. We work closely with
              clients to deliver precise, practical, and strategically sound
              solutions. Driven by the Spirit of Justice, Guided by the Sanctity of Law, MLS&Co is
              your trusted legal partner, committed to shaping the legal landscape
              and fostering sustainable development for our clients and
              communities through advisory, litigation, and pro bono initiatives.
            </p>
            <Link to="/legacy"><button className='about-btn'>Discover More</button></Link>
          </div>
          <div className="about-image">
            <img
              src="./FirmImage.jpg"
              alt="Law books"
            />
          </div>
        </div>
    </section>
  );
};

export default About;

