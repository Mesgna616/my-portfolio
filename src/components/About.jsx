import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center">
      <div className="flex flex-col justify-center items-center w-full py-20 px-4">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-10 mb-10">
          <div className="sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-[#f472b6] text-[#ccd6f6]">
              About
            </p>
          </div>
          <div />
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-left text-xl font-bold leading-snug text-[#ccd6f6]">
            <p>
              A passionate full stack developer with a solid foundation in both
              back-end and front-end technologies.
            </p>
          </div>
          <div className="border-l border-[#64ffda]/20 pl-6">
            <p className="text-base text-[#8892b0] leading-relaxed">
              A junior software developer committed to continuous learning,
              receptive to feedback, prioritizing clients, and a
              service-centric approach — striving to exceed expectations
              through effective communication, collaboration, and teamwork. A
              quick learner with enthusiasm for modern technology and a solid
              foundation in programming principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About 