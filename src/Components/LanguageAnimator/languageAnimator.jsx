import React, { useState, useEffect, useRef } from "react";

const LanguageAnimator = ({ languages }) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const sphereRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [languages]);

  const calculatePosition = (index, total) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    return {
      x: 100 * Math.cos(theta) * Math.sin(phi),
      y: 100 * Math.sin(theta) * Math.sin(phi),
      z: 100 * Math.cos(phi),
    };
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastX(e.clientX);
    setLastY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      setRotationY((prev) => prev + deltaX * 0.1);
      setRotationX((prev) => prev - deltaY * 0.1);
      setLastX(e.clientX);
      setLastY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      setIsDragging(true);
      setLastX(e.touches[0].clientX);
      setLastY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (isDragging) {
        const deltaX = e.touches[0].clientX - lastX;
        const deltaY = e.touches[0].clientY - lastY;
        setRotationY((prev) => prev + deltaX * 0.1);
        setRotationX((prev) => prev - deltaY * 0.1);
        setLastX(e.touches[0].clientX);
        setLastY(e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const sphereElement = sphereRef.current;
    sphereElement.addEventListener("mousedown", handleMouseDown);
    sphereElement.addEventListener("mousemove", handleMouseMove);
    sphereElement.addEventListener("mouseup", handleMouseUp);
    sphereElement.addEventListener("mouseleave", handleMouseUp);
    sphereElement.addEventListener("touchstart", handleTouchStart);
    sphereElement.addEventListener("touchmove", handleTouchMove);
    sphereElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      sphereElement.removeEventListener("mousedown", handleMouseDown);
      sphereElement.removeEventListener("mousemove", handleMouseMove);
      sphereElement.removeEventListener("mouseup", handleMouseUp);
      sphereElement.removeEventListener("mouseleave", handleMouseUp);
      sphereElement.removeEventListener("touchstart", handleTouchStart);
      sphereElement.removeEventListener("touchmove", handleTouchMove);
      sphereElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, lastX, lastY]);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (!hovering) {
        setRotationY((prev) => prev + 0.1);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [hovering]);

  return (
    <div
      className="sphere"
      ref={sphereRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
      }}
    >
      {languages.map((language, index) => {
        const { x, y, z } = calculatePosition(index, languages.length);
        return (
          <span
            key={index}
            className={`language ${
              currentLanguageIndex === index ? "active" : ""
            }`}
            style={{
              transform: `translate3d(${x}px, ${y}px, ${z}px)`,
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
