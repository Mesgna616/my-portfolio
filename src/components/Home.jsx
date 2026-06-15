import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] relative overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(100,255,218,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Soft radial glow center-left */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10">
        <p className="mono text-[#64ffda] text-base sm:text-lg tracking-widest mb-4 anim-1">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] leading-tight anim-2">
          Mesgna Mehari Woldeab
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0] mt-2 anim-3">
          I am a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-6 max-w-[560px] text-base sm:text-lg leading-relaxed anim-4">
          Welcome to my portfolio — I build things for the web.
        </p>
        <div className="anim-5">
          <button className="group mono border border-[#64ffda] text-[#64ffda] px-7 py-3 text-sm tracking-widest flex items-center gap-3 hover:bg-[#64ffda]/10 transition-all duration-300">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
