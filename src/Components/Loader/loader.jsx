import React, { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "auto";

    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); //   5 seconds

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="loader-body">
      <div className="circle">
        <div className="inner"></div>
      </div>
    </div>
  );
};

export default Loader;
