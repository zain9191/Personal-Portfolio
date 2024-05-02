import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SubTitle = ({ text }) => {
  const subTitleRef = useRef(null);

  useEffect(() => {
    const node = subTitleRef.current;
    const resetAnimation = () => {
      if (node) {
        node.style.animation = "none";
        void node.offsetHeight;
        node.style.animation = null;
      }
    };

    resetAnimation();

    return () => {
      if (node) {
        node.style.animation = "";
      }
    };
  }, []);

  return (
    <div className="subTitleContainer">
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
