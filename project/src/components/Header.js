import React from "react";
import axios from "axios";

const Header = () => {
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
        <ul className="flex flex-row justify-center space-x-4 font-thin md:space-x-10 md:text-xl md:justify-end">
          <li>
            <a onClick={pdfDownload}
              href="#"
              className="px-5 py-1 rounded-lg hover:bg-gray focus:bg-gray"
            >
              Download PDF
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-5 py-1 rounded-lg hover:bg-gray focus:bg-gray"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="px-5 py-1 rounded-lg hover:bg-gray focus:bg-gray"
            >
              Skills & Tools
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-5 py-1 rounded-lg hover:bg-gray focus:bg-gray"
            >
              Contact
            </a>
          </li>
          {/* pdf 추가 예정 */}
        </ul>
      </nav>
      <div className="fixed z-10 inline-block bottom-24 right-24">
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="grid w-10 h-10 mb-5 text-3xl border-2 rounded-full cursor-pointer place-items-center"
        >
          <img alt="" src="./images/icons/Group 39 (1).png"></img>
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
