import React, { useState } from "react";
import weather from "../assets/weather.png";
import todolist from "../assets/todo-list.png";
import saySaimon from "../assets/say-saimon.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: todolist,
    title: "Todo List",
    description:
      "This is my Todo-List app, This app used for daily work or task plaining rutin app",
    links: {
      site: "https://work-2do.netlify.app/",
      github: "https://github.com/mrakmondal6612/Todo_list_React",
    },
  },
  {
    img: saySaimon,
    title: "Says Simon Game",
    description: "This game use for grow up of Human's braine IQ level.",
    links: {
      site: "https://mrakmondal6612.github.io/Game_Frame/",
      github: "https://github.com/mrakmondal6612/Game_Frame",
    },
  },
  {
    img: weather,
    title: "Weather App",
    description:
      "This is my Weather App, This app used for calculate current weather in your city.",
    links: {
      site: "https://weather-by-ak.netlify.app/",
      github: "https://github.com/mrakmondal6612/Weather_App_React",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #6",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="my-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6 md:py-40"
      id="portfolio"
    >
      <div className="z-10 col-span-3 grid place-items-center grid-cols-1 relative">
        <p className="text-gray-200 font-bold text-4xl -skew-y-6 ">
          Select Project
        </p>
        <img src={arrow} className="absolute w-[50px] top-10 right-12" />

        <ul
          className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1
   space-y-2 md:space-y-4 text-2xl"
        >
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 rounded-lg px-2 hover:bg-slate-600
         transition duration-300 ${
           currentProject === index ? "active-project" : ""
         }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 glass  w-full border-2 col-span-5">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <div className="p-6">
          <p className="text-gray-200 my-4">
            {projects[currentProject].description}
          </p>
          <div className="flex space-x-4">
            <a
              href={projects[currentProject].links.site}
              className="px-4 py-2 bg-slate-600
                   text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              View Site
            </a>
            <a
              href={projects[currentProject].links.github}
              className="px-4 py-2 bg-gray-800
                   text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
