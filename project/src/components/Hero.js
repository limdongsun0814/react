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
      <div className="mb-auto space-y-1 ">
        <h1 className="mb-3 text-5xl font-bold md:text-5xl">
          안녕하세요.
          <br></br>
          임동선입니다.
        </h1>
        <span className="font-bold text-orange-200">
          “사용자가 이용하고 싶은 서비스를 개발하는 개발자입니다.”
        </span>
        <p className="leading-relaxed tracking-wide">
          &nbsp;"모든 서비스에는 사용자가 존재하고,{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            사용자가 사용하기 쉽고 친숙해야
          </span>{" "}
          서비스의 가치를 인정받을 수 있다"고 생각하는 개발자입니다.{" "}
        </p>
        {/* <br></br> */}
        <p className="leading-relaxed tracking-wide">
          대학원 시절에는{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            사물 인터넷(IoT) 개발
          </span>
          했습니다.
        </p>
        {/* <br></br> */}
        <p className="leading-relaxed tracking-wide">
          졸업 후, '
          <span className="font-bold" style={{ color: "#a162e8" }}>
            IoT 개발자
          </span>
          '라는 꿈을 이루기 위해 JAVA 웹 서비스 풀스택 교육 과정을 이수했습니다.{" "}
        </p>
        {/* <br></br> */}
        <p className="leading-relaxed tracking-wide">
          동네빵집 플랫폼과 멍줍 프로젝트를 통해 RDBMS, Backend 개발 역량을
          강화했습니다.
        </p>
        {/* <br></br> */}
        <p className="leading-relaxed tracking-wide">
          개발 목표는{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            사용자가 이용하기 쉽운 서비스 개발
          </span>
          을 중요하게 생각하는 개발자입니다.{" "}
        </p>
        <br></br>

        <span className="font-bold text-orange-200 ">“소통과 성장, 계획”</span>
        {/* css와 디자인 부분 */}
        <p className="leading-relaxed tracking-wide">
          &nbsp;
          <span className="font-bold" style={{ color: "#a162e8" }}>
            지속적인 프로젝트
          </span>
          를 통해 역량을 강화하고 팀원과{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            소통
          </span>
          을 통해 지식을 공유하는 개발자입니다.
        </p>
        {/* <br></br> 요기 별로다 수정하자 */}
        {/* <p className="leading-relaxed tracking-wide">
          피드백과 다양한 매소드 구현으로 서비스의 성능을 높이는 개발자입니다.
        </p>
        <p className="leading-relaxed tracking-wide">
          <span className="font-bold" style={{ color: "#a162e8" }}>
            주단위 계획
          </span>
          하여 시간을 효율적으로 관리하여 성장하는 개발자입니다.{" "}
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
