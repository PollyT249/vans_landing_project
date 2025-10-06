import gsap from "gsap";
import { useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section
      id="story"
      className="min-h-dvh w-screen bg-brown-400 text-green-100"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text[10px]">
          The Vans Journey
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/story.jpg"
                  alt="story"
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-space-mono-regular text-lg text-brown-100 md:text-start">
              Born in California in 1966, Vans grew from a small skate shop into
              a global icon of culture. Rooted in creativity and fueled by
              community, its story continues with every step you take.
            </p>

            <Button
              id="realm-btn"
              title="discover"
              leftIcon={<TiLocationArrow />}
              containerClass="mt-5 !bg-green-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
