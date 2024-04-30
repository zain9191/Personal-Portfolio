import React, { useState, useEffect } from "react";

const ScrollAnimation = ({ children, className }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8; // Adjust as needed
      const scrollPercentage = 1 - Math.min(scrollTop / triggerPoint, 1); // Reverse logic

      setOpacity(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={className} style={{ opacity }}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
