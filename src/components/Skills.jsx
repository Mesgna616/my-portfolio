import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.jpg";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import PostgreSQL from "../assets/PostgreSql2.png";
import Tailwind from "../assets/tailwind.png";
import Express from "../assets/express-js-2.png";
import Git from "../assets/git-bash.svg"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-3xl">Technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-100  mx-auto"
              src={PostgreSQL}
              alt="postgreSQL icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={GitHub} alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Express} alt="Express icon" />
            <p className="my-4">Express Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">Version Control- Git Bash </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
