import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to vans off the wall family
        </h2>

        <AnimatedTitle
          title="United by Vans,<br /> driven by style"
          containerClass="mt-5 !text-[#26301f] text-center"
        />

        <div className="about-subtext">
          <p className="mb-2">
            The spirit behind{" "}
            <span className="text-green-50">Vans Off The Wall</span> — where
            creativity meets bold expression
          </p>
          <p>
            <span className="text-green-50">Vans</span> brings together
            dreamers, skaters, and creators worldwide, uniting every step into a
            culture of freedom and authenticity
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
