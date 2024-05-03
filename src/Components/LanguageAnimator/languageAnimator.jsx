// LanguageAnimator.js
import React, { useState, useEffect } from "react";

const LanguageAnimator = ({ languages }) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [languages]);

  return (
    <div className="sphere">
      {languages.map((language, index) => {
        const angle = index * (360 / languages.length);
        return (
          <span
            key={index}
            className={`language ${
              currentLanguageIndex === index ? "active" : ""
            }`}
            style={{
              transform: `rotateY(${angle}deg) translateZ(125px)`,
            }}
          >
            {language}
          </span>
        );
      })}
    </div>
  );
};

export default LanguageAnimator;
