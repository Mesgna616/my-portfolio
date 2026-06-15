import React from "react";
import back1 from "../assets/back1.png";    
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png"

const Work = () => {
    return (
      <div name="work" className="w-full md:min-h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 py-20 flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-[#f472b6]">
            Work
          </p>
          <p className="py-4 text-[#8892b0]">Check out some of my projects</p>
        </div>

          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {/* Grid Item / Card */}
            <div
              style={{backgroundImage: `url(${back1})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <span className="text-xl font-bold text-white tracking-wide block">
                   Full Stack Videos App
                </span>
                <div className="pt-6 flex justify-center gap-2">
                  <a href="http://video-recommendation-2024.s3-website.eu-west-2.amazonaws.com/" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Mesgna616/Full-Stack-Project-Assessment/tree/Full-Stack-Project-mesgna-woldeab" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{backgroundImage: `url(${back2})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <span className="text-xl font-bold text-white tracking-wide block">TV-Shows App</span>
                <div className="pt-6 flex justify-center gap-2">
                  <a href="https://cfy-mesgna616-tv.netlify.app/" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Demo</button>
                  </a>
                  <a href="https://github.com/Mesgna616/tv-show-dom-project/tree/for-review" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{backgroundImage: `url(${back3})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <span className="text-xl font-bold text-white tracking-wide block">Weather App</span>
                <div className="pt-6 flex justify-center gap-2">
                  <a href="https://cfy-mesgna-weather-app.netlify.app/" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Demo</button>
                  </a>
                  <a href="https://github.com/Mesgna616/weather-app" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{backgroundImage: `url(${back3})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <span className="text-xl font-bold text-white tracking-wide block">Countries React App</span>
                <div className="pt-6 flex justify-center gap-2">
                  <a href="https://cfy-mesgna616-countries-react.netlify.app/" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Demo</button>
                  </a>
                  <a href="https://github.com/Mesgna616/react-countries" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{backgroundImage: `url(${back2})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <span className="text-xl font-bold text-white tracking-wide block">BabyNames React App</span>
                <div className="pt-6 flex justify-center gap-2">
                  <a href="https://cfy-mesgna616-baby-names.netlify.app/" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Demo</button>
                  </a>
                  <a href="https://github.com/Mesgna616/baby-names-react" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{backgroundImage: `url(${back1})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <span className="text-xl font-bold text-white tracking-wide block">Star App</span>
                <div className="pt-6 flex justify-center gap-2">
                  <a href="https://tech-pandas-star-h5sy.onrender.com/" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Demo</button>
                  </a>
                  <a href="https://github.com/Mesgna616/tech-pandas-STAR" target="_blank" rel="noreferrer">
                    <button className="rounded px-4 py-2 bg-white/10 border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200">Code</button>
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