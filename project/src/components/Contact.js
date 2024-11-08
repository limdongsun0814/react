import React from "react";

const Contact = () => {
  return (
    <section className="my-28">
      <header className="h-20 px-5 pt-0 text-2xl font-bold border-b-2">
        <h2 className="mb-1">Thank You!!!</h2>
        <p className="text-base font-thin mb-0.5">지속적인 자기 개발을 통해 <span class="font-bold" style={{color:"#a162e8"}}>성장</span>하며, 팀원과 <span class="font-bold" style={{color:"#a162e8"}}>소통</span>하며 성장하는 개발자입니다.</p>
      </header>
      {/* <div className="flex flex-col flex-wrap justify-between md:mx-6 md:flex-row"> */}
      <div className="md:mx-6">
        <div className="float-right p-5 my-5 md:px-0 flex w-full justify-between">
          <div id="contact">
            <p className="font-bold">Contact</p>
            {/* 이름 주소 */}
            <div className="inline-block mr-5">
              <p className="font-bold">이름</p>
              <p className="font-thin">임동선</p>
            </div>
            <div className="inline-block mr-5">
              <p className="font-bold">주소</p>
              <p className="font-thin">서울특별시 영등포구 양평동</p>
            </div>
            <div className="inline-block mr-5">
              <p className="font-bold">이메일</p>
              <p className="font-thin">asme12@naver.com</p>
            </div>
            <div className="inline-block mr-5">
              <p className="font-bold">전화 번호</p>
              <p className="font-thin">010-3393-2244</p>
            </div>
            </div>
            <div>
            <p className="font-bold">Link</p>
            <div className="inline-block mr-5">
              <a
                href="https://github.com/limdongsun0814"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex flex-row items-end p-2 text-sm border border-gray-500 rounded-lg">
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  GitHub
                </span>
              </a>
            </div>
            <div className="inline-block">
              <a
                href="https://hub.docker.com/u/asme12"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex flex-row items-end p-2 text-sm border border-gray-500 rounded-lg text-sky-400">
                  <img
                    src="./images/icons/docker.png"
                    alt=""
                    width="24px"
                    height="24px"
                    className="w-6 mr-1"
                  />
                  Docker
                </span>
              </a>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
