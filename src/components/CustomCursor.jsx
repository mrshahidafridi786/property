import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Smooth outer ring interpolation
  useEffect(() => {
    let frameId;
    const updateRingPosition = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust the divider (e.g., 6) to change the follow-lag speed
        return {
          x: prev.x + dx / 5,
          y: prev.y + dy / 5,
        };
      });
      frameId = requestAnimationFrame(updateRingPosition);
    };

    frameId = requestAnimationFrame(updateRingPosition);
    return () => cancelAnimationFrame(frameId);
  }, [position]);

  // Set up hover states for buttons, links, and cards
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".interactive-card") ||
        target.getAttribute("role") === "button";
      
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "12px" : "8px",
          height: isHovering ? "12px" : "8px",
          backgroundColor: isHovering ? "#10B981" : "#2563EB",
        }}
      />
      {/* Outer Ring */}
      <div
        className="custom-cursor-ring"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          borderColor: isHovering ? "rgba(16, 185, 129, 0.6)" : "rgba(37, 99, 235, 0.4)",
          backgroundColor: isHovering ? "rgba(16, 185, 129, 0.05)" : "transparent",
        }}
      />
    </>
  );
}
