import React, { useState, useEffect, useRef } from "react";

const LanguageAnimator = ({ languages }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const sphereRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [sphereSize, setSphereSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const size = Math.min(window.innerWidth, window.innerHeight) * 0.4;
      setSphereSize(size);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculatePosition = (index, total) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    return {
      x: (sphereSize / 2) * Math.cos(theta) * Math.sin(phi),
      y: (sphereSize / 2) * Math.sin(theta) * Math.sin(phi),
      z: (sphereSize / 2) * Math.cos(phi),
    };
  };

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    setLastX(e.clientX);
    setLastY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isHovering) {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      setRotationY((prev) => prev + deltaX * 0.1);
      setRotationX((prev) => prev - deltaY * 0.1);
      setLastX(e.clientX);
      setLastY(e.clientY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const sphereElement = sphereRef.current;

    sphereElement.addEventListener("mouseenter", handleMouseEnter);
    sphereElement.addEventListener("mousemove", handleMouseMove);
    sphereElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sphereElement.removeEventListener("mouseenter", handleMouseEnter);
      sphereElement.removeEventListener("mousemove", handleMouseMove);
      sphereElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering, lastX, lastY]);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setRotationY((prev) => prev + 0.1);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="Language__container">
      <div
        className="sphere"
        ref={sphereRef}
        style={{
          width: `${sphereSize}px`,
          height: `${sphereSize}px`,
          transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
        }}
      >
        {languages.map((language, index) => {
          const { x, y, z } = calculatePosition(index, languages.length);
          return (
            <span
              key={index}
              className="language"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-rotationY}deg) rotateX(${-rotationX}deg)`,
              }}
            >
              {language}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageAnimator;
