import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const PopUpMessage = ({ message = "", delay = "", duration = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);

  // Handle timers for showing & hiding
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);

      // Hide after duration
      const hideTimer = setTimeout(() => {
        if (popupRef.current) {
          gsap.to(popupRef.current, {
            x: 30,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => setIsVisible(false),
          });
        }
      }, duration);

      return () => clearTimeout(hideTimer);
    }, delay);

    return () => clearTimeout(showTimer);
  }, [delay, duration]);

  // Run GSAP animation when the popup becomes visible
  useEffect(() => {
    if (isVisible && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={popupRef}
      className="absolute top-full mt-2 right-0 max-w-xs text-green-300 text-sm px-3 py-2 
      rounded-lg bg-brown-100 shadow-lg"
    >
      <span>{message}</span>

      {/* Comic bubble tail */}
      <div
        className="absolute top-0 right-3 -translate-y-2 w-0 h-0 
        border-l-8 border-l-transparent 
        border-r-8 border-r-transparent 
        border-b-8 border-b-brown-100"
      />
    </div>
  );
};

export default PopUpMessage;
