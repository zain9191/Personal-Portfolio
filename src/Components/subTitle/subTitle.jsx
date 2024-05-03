import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// import './SubTitle.css'; // Make sure to create this CSS file

const SubTitle = ({ text }) => {
  const subTitleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const shouldBeVisible = window.scrollY > window.innerHeight;
    setIsVisible(shouldBeVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const node = subTitleRef.current;
    const resetAnimation = () => {
      if (node) {
        node.style.animation = "none";
        void node.offsetHeight; // Trigger reflow
        node.style.animation = "";
      }
    };

    if (isVisible) {
      resetAnimation();
    }

    return () => {
      if (node) {
        node.style.animation = "";
      }
    };
  }, [isVisible]);

  return (
    <div className={`subTitleContainer ${isVisible ? "show" : ""}`}>
      <h2 ref={subTitleRef} className="subTitleContainer__h2">
        {text}
      </h2>
    </div>
  );
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubTitle;
