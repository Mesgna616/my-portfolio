import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-10">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-left text-2xl font-bold">
            <p>
              A passionate full stack developer with solid foundation both on back end and front end Technologies. 
              {" "}
            </p>
          </div>
          <div>
            <p className=" text-xl ">
            A junior software developer committed to continuous learning, receptive to feedback, prioritizing clients, and service-centric approach, striving to exceed expectations through effective communication, collaboration, and teamwork. A quick learner with enthusiasm for modern technology and a solid foundation in programming principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About 