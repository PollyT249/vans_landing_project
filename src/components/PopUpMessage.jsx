import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const PopUpMessage = ({
  message = "",
  delay = 3000, // ms before popup shows
  duration = 5000, // ms popup stays visible
  position = "right",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);

      // Slide in
      gsap.fromTo(
        popupRef.current,
        { x: position === "right" ? 30 : -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      // Hide after duration
      const hideTimer = setTimeout(() => {
        gsap.to(popupRef.current, {
          x: position === "right" ? 30 : -30,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => setIsVisible(false),
        });
      }, duration);

      return () => clearTimeout(hideTimer);
    }, delay);

    return () => clearTimeout(showTimer);
  }, [delay, duration, position]);

  if (!isVisible) return null;

  return (
    <div
      ref={popupRef}
      className={`absolute top-full mt-2 ${
        position === "right" ? "right-0" : "left-0"
      } max-w-xs text-green-300 text-sm px-3 py-2 
      rounded-lg bg-brown-100 shadow-lg`}
    >
      <span>{message}</span>

      {/* Comic bubble tail */}
      <div
        className={`absolute top-0 ${
          position === "right" ? "right-4" : "left-4"
        } -translate-y-2 w-0 h-0 
        border-l-8 border-l-transparent 
        border-r-8 border-r-transparent 
        border-b-8 border-b-brown-100`}
      />
    </div>
  );
};

export default PopUpMessage;
