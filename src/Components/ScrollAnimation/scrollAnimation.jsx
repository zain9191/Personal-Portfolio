import React, { useState, useEffect, useRef } from "react";

const ScrollAnimation = ({ children, className }) => {
  const [opacity, setOpacity] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Fade in when entering the viewport and fade out when exiting
      const isVisible = rect.top < viewportHeight && rect.bottom > 0;
      const above = rect.bottom < 0;
      const below = rect.top > viewportHeight;

      let newOpacity = 0;
      if (isVisible) {
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(0, rect.top);
        newOpacity = visibleHeight / rect.height;
      } else if (above) {
        newOpacity = 0; // Fully transparent when the section has scrolled past the top
      } else if (below) {
        newOpacity = 0; // Fully transparent when the section is still below the viewport
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className={className} style={{ opacity }}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
