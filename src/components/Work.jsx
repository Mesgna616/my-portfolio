import React from "react";
import back1 from "../assets/back1.png";    
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png"

const Work = () => {
    return (
      <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="py-8">
            <p className="text-4xl font-bold inline border-b-4  text-gray-300 border-pink-600">
              Work
            </p>
            <p className="py-6">Check out some of my projects</p>
          </div>
  
          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid Item / Card */}
            <div
              style={{backgroundImage: `url(${back1})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Videos 
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://cfy-full-stack-project.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
  
                  <a
                    href="https://github.com/Mesgna616/Full-Stack-Project-Assessment/tree/Full-Stack-Project-mesgna-woldeab"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{backgroundImage: `url(${back2})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  TV-Shows React App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://cfy-mesgna616-tv.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
  
                  <a
                    href="https://github.com/Mesgna616/tv-show-dom-project/tree/for-review"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{backgroundImage: `url(${back3})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Weather-app
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://cfy-mesgna-weather-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
  
                  <a
                    href="https://github.com/Mesgna616/weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{backgroundImage: `url(${back3})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Countries React App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://cfy-mesgna616-countries-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
  
                  <a
                    href="https://github.com/Mesgna616/react-countries"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{backgroundImage: `url(${back2})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  BabyNames React App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://cfy-mesgna616-baby-names.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
  
                  <a
                    href="https://github.com/Mesgna616/baby-names-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{backgroundImage: `url(${back1})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Finial project assessment
                </span>
                <div className="pt-8 text-center">
                  <a href="https://tech-pandas-star.onrender.com/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
  
                  <a
                    href="https://github.com/Mesgna616/tech-pandas-STAR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Work;