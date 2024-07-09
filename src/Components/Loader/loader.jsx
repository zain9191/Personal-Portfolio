import React, { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling when the loader is visible
    // document.body.style.overflow = visible ? "hidden" : "auto";

    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Display for 5 seconds

    return () => {
      clearTimeout(timer); // Clean up timer on component unmount
      // document.body.style.overflow = "auto"; // Re-enable scrolling
    };
  }, [visible]);

  if (!visible) return null; // Hide component after timeout

  return (
    <div className="loader-body">
      <div className="circle">
        <div className="inner"></div>
      </div>
    </div>
  );
};

export default Loader;
