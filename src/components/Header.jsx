import React, { useEffect, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import AboutMe from "./Aboutme";

import { FaChevronCircleDown } from "react-icons/fa";
import Toolsused from "./Toolsused";

import Objective from "./Objective";
import { easeInOut, motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Workexperience from "./Workexperience";
import Skills from "./Skills";
import HamburgerMenu from "./HamburgerMenu";
import Footer from "./Footer";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

export default function Header() {
  const [boolean, setboolean] = useState(true);
  const [hamburgerboolean, sethamburgerboolen] = useState(false);
  const [mode, setMode] = useState("objective");
  const [aboutMeButtonStyle, setStyleAboutMe] = useState(
    "text-white bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color font-mono"
  );

  useEffect(() => {
    if (boolean)
      setStyleAboutMe(
        "text-teal-600 bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color border-2 border-teal-600 border-spacing-2 font-mono"
      );
    else
      setStyleAboutMe(
        "text-slate-500 bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color font-mono"
      );
  }, [boolean]);

  return (
    <div className=" flex-col justify-between font-mono">
      <div className="bg-gray-900 h-screen overflow-y-auto">
        <div className="md:flex justify-between px-5 py-3">
          <div className="flex justify-evenly">
            <h1 className=" pl-3 my-auto font-mono text-2xl font-bold text-teal-600 hover:text-red-400 hover:transition-colors">
              Portfolio.
            </h1>
            <p className="text-slate-400 font-semibold inline-block align-baseline my-auto mx-4">
              ~ shubham jadhav
            </p>
          </div>
          <div className="flex justify-evenly">
            <ul className="flex justify-evenly px-10">
              <a
                className="my-auto"
                href="https://github.com/Shubham-bot123456/"
              >
                <BsGithub className="my-auto text-2xl text-teal-600 hover:text-red-400 mx-6"></BsGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-jadhav-90446519a/"
                className="my-auto text-2xl text-teal-600 hover:text-red-400"
              >
                <BsLinkedin></BsLinkedin>
              </a>
            </ul>

            <motion.button
              className={aboutMeButtonStyle}
              onClick={() => setboolean(!boolean)}
              whileHover={{
                rotate: ["0deg", "1.5deg", "-1.5deg", "0deg"],
                ease: easeInOut,
              }}
            >
              {boolean ? "ABOUT ME (ON)" : "ABOUT ME (OFF)"}
            </motion.button>
          </div>
        </div>
        <div className="flex-col">
          {hamburgerboolean ? (
            <div className="flex-col">
              <HamburgerMenu
                somemode={setMode}
                boolean={setboolean}
                currentMode={mode}
              ></HamburgerMenu>
              <div className="flex justify-evenly text-2xl animate-bounce text-red-500 my-4">
                <IoIosArrowUp
                  onClick={() => sethamburgerboolen(!hamburgerboolean)}
                ></IoIosArrowUp>
              </div>
            </div>
          ) : (
            <div className="flex justify-evenly">
              <MdOutlineArrowDropDownCircle
                className="my-auto text-5xl hover:text-[#C70039] text-teal-500 animate-bounce"
                onClick={() => sethamburgerboolen(!hamburgerboolean)}
              ></MdOutlineArrowDropDownCircle>
            </div>
          )}
          <div className="flex justify-evenly">
            {boolean ? (
              <AboutMe className="transform transition-all scale-105"></AboutMe>
            ) : (
              <>
                {mode === "objective" ? (
                  <Objective></Objective>
                ) : mode === "workexperience" ? (
                  <Workexperience></Workexperience>
                ) : mode === "toolsused" ? (
                  <Toolsused></Toolsused>
                ) : mode === "projectsundertaken" ? (
                  <Skills></Skills>
                ) : (
                  <div></div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
