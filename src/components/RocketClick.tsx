import { useEffect, useCallback } from "react";

const RocketClick = () => {
  const handleClick = useCallback((e: MouseEvent) => {
    const rocket = document.createElement("div");
    rocket.textContent = "🚀";
    rocket.style.cssText = `
      position: fixed;
      left: ${e.clientX - 12}px;
      top: ${e.clientY}px;
      font-size: 24px;
      pointer-events: none;
      z-index: 9999;
      animation: rocketFly 0.8s ease-out forwards;
    `;
    document.body.appendChild(rocket);
    setTimeout(() => rocket.remove(), 800);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return null;
};

export default RocketClick;
