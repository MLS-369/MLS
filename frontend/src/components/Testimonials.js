import React from 'react';
import { Star } from 'lucide-react';
import '../styles/Testimonials.css';
import { useTheme } from './ThemeContext';

const Testimonials = () => {
  const { isDarkTheme } = useTheme();
  const testimonials = [
    {
      text: "Their legal expertise and strategic approach were invaluable to our case. The team at MLS&Co is responsive, professional, and highly effective.",
      name: "John Doe",
      position: "CEO, Innovate Corp"
    },
    {
      text: "Their legal expertise and strategic approach were invaluable to our case. The team at MLS&Co is responsive, professional, and highly effective.",
      name: "John Doe",
      position: "CEO, Innovate Corp"
    },
    {
      text: "Their legal expertise and strategic approach were invaluable to our case. The team at MLS&Co is responsive, professional, and highly effective.",
      name: "John Doe",
      position: "CEO, Innovate Corp"
    },
    {
      text: "Their legal expertise and strategic approach were invaluable to our case. The team at MLS&Co is responsive, professional, and highly effective.",
      name: "John Doe",
      position: "CEO, Innovate Corp"
    },
    {
      text: "Their legal expertise and strategic approach were invaluable to our case. The team at MLS&Co is responsive, professional, and highly effective.",
      name: "John Doe",
      position: "CEO, Innovate Corp"
    },
    {
      text: "Their legal expertise and strategic approach were invaluable to our case. The team at MLS&Co is responsive, professional, and highly effective.",
      name: "John Doe",
      position: "CEO, Innovate Corp"
    }
  ];

  return (
    <section className={`testimonials ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id='awards'>
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-marquee">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon" size={24} />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-position">{t.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

