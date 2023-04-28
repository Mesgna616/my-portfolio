import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-left text-4xl font-bold">
            <p>
              A passionate full stack developer 
              {" "}
            </p>
          </div>
          <div>
            <p className="text-2xl">
              I am a recent graduate with hand on experience in web development. I have gained experience both in front-end and back-end technologies.
               Core technical skills including JavaScript, React,
              Node and SQL/NoSQL databases. I embarking to learn cloud technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About 