import React, { useState } from "react";
import projects from "../projectData";
import Slider from "react-slick";
const Project = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
  };
  projects[0].description.map((description, index) => {
    console.log(description);
  });
  // console.log(projects[0].description, "aaa");
  return (
    <>
      <section className="px-5 my-28" id="projects">
        <header className="pt-10 text-2xl font-bold">
          <h2>Projects</h2>
        </header>

        <div className="space-y-24 my-7">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                key={index}
                hidden={activeSlide !== index ? true : undefined}
              >
                <article className="flex flex-wrap md:justify-between md:items-center">
                  <picture
                    className={
                      index % 2 === 0
                        ? "w-full md:w-6/12 shadow-lg "
                        : "w-full md:w-6/12 shadow-lg md:order-1"
                    }
                  >
                    <img
                      width="768px"
                      height="575px"
                      loading="lazy"
                      alt={project.title}
                      className="rounded-lg"
                      src={project.image}
                    />
                  </picture>
                  <div className="flex flex-col w-full mx-1 my-3 space-y-3 md:w-5/12 ">
                    <h3 className="text-lg font-bold uppercase">
                      {project.title}
                    </h3>
                    {project.description.map((description, index) => (
                      <div key={index}>
                        <span className="font-bold text-orange-200 ">
                          {description.titleDescription}
                        </span>
                        <ol>
                          {description.descriptionList.map(
                            (description, index) => {
                              let cnt = 0;
                              for (const c of description) {
                                if (c == " ") {
                                  cnt += 1;
                                } else {
                                  break;
                                }
                              }
                              console.log(cnt);
                              const spaces = Array.from(
                                { length: cnt },
                                (_, i) => <span key={i}>&nbsp;</span>
                              );
                              return (
                                <li key={index}>
                                  {spaces}
                                  {description}
                                </li>
                              );
                            }
                          )}
                        </ol>
                      </div>
                    ))}
                    <div className="flex flex-wrap pb-2 space-x-3">
                      {project.tools.map((disc, index) => (
                        <span
                          className="px-2 py-1 m-2 text-sm border border-gray-500 rounded-lg"
                          key={index}
                        >
                          {disc}
                        </span>
                      ))}
                    </div>
                    <div className="relative flex w-auto space-x-5">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <img
                          src="./images/icons/github.svg"
                          alt="link to github page"
                          width="24px"
                          height="24px"
                        />
                      </a>
                      {project.linkCheck && (
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <img
                            src="./images/icons/external-link.svg"
                            alt="link to live website"
                            width="24px"
                            height="24px"
                          />
                        </a>
                      )}
                      <div className="px-2 py-1 text-sm border border-gray-500 rounded-lg">
                        {project.day}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Project;
