import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import axios from "axios";

const Header = () => {

  const [windowWidth,setWindowWidth]=useState(window.innerWidth);
  useEffect(()=>{
    const handleResize = ()=>{
      console.log(window.innerWidth,"width");
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[]);
  const navClass = classNames("flex flex-row justify-center  font-thin md:space-x-10 md:text-xl md:justify-end ",{
    "space-x-4":windowWidth>=522,
    "space-x-0":windowWidth<473,
  });
  const aClass = classNames("py-1 rounded-lg hover:bg-gray focus:bg-gray ",{
    "px-5":windowWidth>=474,
    "px-4":windowWidth>441,
    "px-3":windowWidth>410,
    "px-2":windowWidth>377,
    "px-1":windowWidth>345,
    "px-1":windowWidth
  })
  const pdfDownload = ()=>{
    const url = "./downloadFile/임동선 포트폴리오.pdf";
    const a = document.createElement('a');
    a.href = url;
    a.download = "임동선 포트폴리오.pdf";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        window.URL.revokeObjectURL(url);
        }, 1000);
    a.remove();
}
  return (
    <>
      <nav className="space-x-10">
        <ul className={navClass}>
          <li>
            <a onClick={pdfDownload}
              href="#"
              className={aClass}
            >
              Download PDF
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={aClass}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className={aClass}
            >
              Skills & Tools
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={aClass}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="fixed z-10 inline-block bottom-24 right-10">
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="grid w-10 h-10 mb-5 text-3xl border-2 rounded-full cursor-pointer place-items-center"
        >
          <img alt="" src="./images/icons/Group 39 (1).png" className=""></img>
        </div>

        <div
          onClick={() => {
            window.scrollTo({ top: 10000000000, behavior: "smooth" });
          }}
          className="grid w-10 h-10 text-3xl border-2 rounded-full cursor-pointer place-items-center"
        >
          <img
            alt=""
            className="rotate-180"
            src="./images/icons/Group 39 (1).png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Header;
