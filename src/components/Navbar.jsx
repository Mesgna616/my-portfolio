import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import Logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]/95 backdrop-blur-sm border-b border-[#64ffda]/10 text-gray-300 z-50">
      <div>{/* logo placeholder */}</div>

      {/* Desktop menu */}
      <ul className="md:flex hidden text-base font-medium tracking-wider gap-2">
        <li>
          <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link className="nav-link" to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li>
          <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 text-[#64ffda] cursor-pointer">
        {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-2"
        }
      >
        {["home","about","skills","work","contact"].map((section) => (
          <li key={section} className="py-4 text-3xl capitalize">
            <Link to={section} smooth={true} duration={500} onClick={handleClick}
              className="hover:text-[#64ffda] transition-colors duration-200">
              {section}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[56px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0d77f5] rounded-r-sm">
            <a
              className="flex justify-between items-center w-full text-white px-4"
              href="https://www.linkedin.com/in/mesgna-woldeab/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={22} />
            </a>
          </li>
          <li className="w-[160px] h-[56px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24292e] rounded-r-sm">
            <a
              className="flex justify-between items-center w-full text-white px-4"
              href="https://github.com/Mesgna616"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={22} />
            </a>
          </li>
          <li className="w-[160px] h-[56px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#64ffda] rounded-r-sm">
            <a
              className="flex justify-between items-center w-full text-[#0a192f] font-semibold px-4"
              href="mailto:mesgna.mehari8@gmail.com"
            >
              <HiOutlineMail size={22} />
              <Link to="contact">Email</Link>
            </a>
          </li>
          <li className="w-[160px] h-[56px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f472b6] rounded-r-sm">
            <a
              className="flex justify-between items-center w-full text-white px-4"
              href="https://drive.google.com/file/d/1-5vc_tdt_1-6gJ-nL7FiJjeqkOaWn-t5/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={22} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
