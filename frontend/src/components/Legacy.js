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
      desc: "“MEN” Represents the mind and intellect, symbolising sharp legal reasoning, clarity of thought, and sound judgment in every matter we handle."
    },
    { name: "LEGATUM", desc: "Means legacy or bequest, reflecting the lasting value, trust, and long-term impact we strive to create for our clients through our work." },
    { name: "SANCTITUS", desc: "Represents sanctity and integrity, symbolising ethical practice, professional honour, and unwavering commitment to justice and the rule of law." }
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
          <h2>Success<br/>Unmatched</h2>
        </div>
      </div>

      {/* ✅ Three Word Counts at Bottom */}
      <div className="wordcount-section">
        <div className="wordcount-item">
          <WordCount count={1200} />
          <p>Successful Cases</p>
        </div>

        <div className="wordcount-item">
          <WordCount count={1000} />
          <p>Trusted Clients</p>
        </div>

        <div className="wordcount-item">
          <WordCount count={200} />
          <p>Trademarks & Patents</p>
        </div>
        <div className="wordcount-item">
          {/* <WordCount count={98} /> */}
          <span className="wordcount-span">98%</span>
          <p>Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
