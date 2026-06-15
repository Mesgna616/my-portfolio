import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.jpg";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import PostgreSQL from "../assets/PostgreSql2.png";
import Tailwind from "../assets/tailwind.png";
import docker from "../assets/docker.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 py-20 flex flex-col justify-center w-full">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#f472b6] text-[#ccd6f6]">
            Skills
          </p>
          <p className="py-4 text-[#8892b0]">Technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-4">
          {[
            { src: HTML, alt: "HTML icon", label: "HTML", size: "w-14" },
            { src: CSS, alt: "CSS icon", label: "CSS", size: "w-14" },
            { src: JavaScript, alt: "JavaScript icon", label: "JavaScript", size: "w-14" },
            { src: ReactImg, alt: "React icon", label: "React", size: "w-14" },
            { src: Node, alt: "Node icon", label: "Node.js", size: "w-24" },
            { src: PostgreSQL, alt: "PostgreSQL icon", label: "PostgreSQL", size: "w-14" },
            { src: GitHub, alt: "Github icon", label: "GitHub", size: "w-14" },
            { src: Tailwind, alt: "Tailwind icon", label: "Tailwind", size: "w-14" },
            { src: docker, alt: "Docker icon", label: "Docker", size: "w-14" },
          ].map(({ src, alt, label, size }) => (
            <div key={label} className="skill-card flex flex-col items-center justify-center gap-3">
              <img className={`${size} mx-auto object-contain`} src={src} alt={alt} />
              <p className="mono text-xs text-[#8892b0] tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
