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
      <div className=" mb-auto space-y-1">
        <h1 className="mb-3 text-5xl font-bold md:text-5xl">
          안녕하세요.
          <br></br>
          임동선입니다.
        </h1>
        <span className="font-bold text-orange-200 ">“사용자가 이용하고 싶은 서비스를 개발하는 개발자입니다.”</span>
        {/* 한컴독스 내용 */}
        <p className="leading-relaxed tracking-wide">
          모든 서비스에는 사용자가 존재하고, 이 사용자가 쉽고 친숙함을 목표하는 개발자입니다. 
          {" "}
        </p>
        <br></br>
        <p className="leading-relaxed tracking-wide">
          대학원 시절에는 주로 기업 연계 사물 인터넷(IoT) 과제로 개발했습니다. {" "}
        </p>
        <p className="leading-relaxed tracking-wide">
          담당 역활은 유선 통신(I2C, RS485 등), 제어(PID 제어), 필터(LPF, HPF, Kalman filter 등), 무선 통신(MQTT, HTML, LoRa, Zigbee 등)를 담당했습니다. 
          {" "}
        </p>
        <p className="leading-relaxed tracking-wide">
          신한 DS 금융 SW 아카데미에서는 JAVA 웹 서비스 풀스택 교육 과정을 이수했습니다.
        </p>
        
        <br></br>
        <p className="leading-relaxed tracking-wide"> 
          사용자 위주의 개발을 통해 사용자가 쉽고 친숙함을 목표로 성장하는 개발자입니다.
          {" "}
        </p>
        <br></br>
        
        <span className="font-bold text-orange-200 ">“소통과 성장”</span>
        {/* css와 디자인 부분 */}
        <p className="leading-relaxed tracking-wide">
          자기 개발을 통해 획득한 성장을 공유하며 성장하는 개발자입니다.
        </p>
        <br></br>
        <p className="leading-relaxed tracking-wide">
          사용자의 피드백과 다양한 방법의 매소드 구현으로 프로젝트의 퀄리티를 높이는 개발자입니다.
        </p>
        <br></br>
        <p className="leading-relaxed tracking-wide">
          주단위 계획하여 시간을 효율적으로 관리하여 성장하는 개발자입니다.
          {" "}
        </p>
      </div>

      
    </section>
  );
};

export default Hero;
