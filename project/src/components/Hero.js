import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="flex flex-col flex-wrap px-5 my-16 space-y-16 md:my-32 md:space-y-0 patterns">
      {/* <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div> */}
      <div className="max-w-md mb-auto space-y-1">
        <h1 className="mb-3 text-5xl font-bold md:text-7xl">안녕하세요.</h1>
        <span className="font-bold text-orange-200 ">“하하”</span>
        <p className="leading-relaxed tracking-wide">
          I have a passion for developing user-friendly, accessible and
          responsive websites. I never stop learning and for me, each new
          project is another adventure.{" "}
        </p>
        <span className="font-bold text-orange-200 ">하하</span>
        <p className="leading-relaxed tracking-wide">
          I have a passion for developing user-friendly, accessible and
          responsive websites. I never stop learning and for me, each new
          project is another adventure.{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
