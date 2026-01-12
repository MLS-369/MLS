import React, { useState } from "react";
import "../styles/Legacy.css";
import WordCount from "./WordCount";
import { useTheme } from "./ThemeContext";

const Legacy = () => {
  const [hovered, setHovered] = useState("");
  const { isDarkTheme } = useTheme();
  const timeoutRef = React.useRef(null);

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHovered(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered("");
    }, 300); // 300ms delay to allow moving to the box
  };

  const topics = [
    {
      name: "MEN",
      desc: "“MEN” is more than just the first part of our name; it is the foundation of our journey. It reflects the principles that guide every step we take: integrity, trust, and unwavering commitment. It is in the way we approach each case with diligence, the way we honor our promises, and the way we nurture relationships that last a lifetime. MEN represents the human element at the heart of our firm — a dedication to doing what is right, a pursuit of excellence in every endeavor, and a promise to lead with both wisdom and compassion. It is the starting point of a legacy built to endure."
    },
    { name: "LEGATUM", desc: "Years of mastery create precise outcomes." },
    { name: "SANCTITUS", desc: "Turning vision into measurable results." }
  ];

  return (
    <div className={`legacy-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="timeline">
        <div className="timeline-line"></div>

        {topics.map((topic, index) => (
          <div
            key={index}
            className="timeline-item"
            onMouseEnter={() => handleMouseEnter(topic.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dot"></div>
            <p className="topic">{topic.name}</p>
            <div
              className={`hover-box ${hovered === topic.name ? "visible" : ""}`}
            >
              {topic.desc}
            </div>
          </div>
        ))}

        <div className="unmatched">
          <h2>Unmatched</h2>
        </div>
      </div>

      {/* ✅ Three Word Counts at Bottom */}
      <div className="wordcount-section">
        <div className="wordcount-item">
          <WordCount count={1200} />
          <p>Successful Cases</p>
        </div>

        <div className="wordcount-item">
          <WordCount count={800} />
          <p>Trusted Clients</p>
        </div>

        <div className="wordcount-item">
          <WordCount count={300} />
          <p>Global Partners</p>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
