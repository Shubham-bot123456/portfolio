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


export default function Header() {
  const [boolean, setboolean] = useState(true);
  const [hamburgerboolean, sethamburgerboolen] = useState(false);
  const [mode, setMode] = useState("objective");
  const [aboutMeButtonStyle, setStyleAboutMe] = useState(
    "text-white bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color"
  );


  useEffect(() => {
    if (boolean)
      setStyleAboutMe(
        "text-teal-600 bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color border-2 border-teal-600 border-spacing-2"
      );
    else
      setStyleAboutMe(
        "text-slate-500 bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color"
      );
  }, [boolean]);

  return (
    <div className="flex flex-col justify-between">
      <div className="bg-gray-100 h-screen overflow-y-auto ">
        <div className="flex justify-between px-5 py-3 ">
          <div className="flex justify-evenly">
            <h1 className=" pl-3 my-auto font-sans text-2xl font-bold text-teal-600 hover:text-red-400 hover:transition-colors">
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
              {boolean ? "about me (ON)" : "about me (OFF)"}
            </motion.button>
          </div>
        </div>
        <div className="flex-col">
          {hamburgerboolean ? (

            <div className="flex-col">
              <motion.div
                className="border-2 border-teal-500 mx-auto w-[70%] rounded-full text-gray-900 py-1 text-center "
                initial={{
                  scale: "0%",
                }}
                animate={{
                  scale: "100%",
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                exit={{
                  scale: "0%",
                }}
              >
                <ul className="flex justify-evenly px-2">
                  <motion.li
                    className={`py-3 font-semibold hover:text-red-400 hover:transition-color hover:bg-gray-800 rounded-full  w-[25%] ${
                      mode === "objective" ? "bg-gray-800 text-red-500" : ""
                    }`}
                    onClick={() => setMode("objective")}
                    whileHover={{
                      rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
                      scale: 1.05,
                    }}
                  >
                    Objective
                  </motion.li>

                  <motion.li
                    onClick={() => {
                      setMode("workexperience");
                      setboolean(false);
                    }}
                    whileHover={{
                      rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
                      scale: 1.05,
                    }}
                    className={`py-3 ml-8 mr-12 font-semibold hover:text-red-400 hover:transition-color hover:bg-gray-800 rounded-full  w-[25%] ${
                      mode === "workexperience"
                        ? "bg-gray-800 text-red-500"
                        : ""
                    }`}
                  >
                    Work experience
                  </motion.li>

                  <motion.li
                    onClick={() => {
                      setMode("toolsused");
                      setboolean(false);
                    }}
                    whileHover={{
                      rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
                      scale: 1.05,
                    }}
                    className={`py-3 ml-8 mr-12 font-semibold hover:text-red-400 hover:transition-color hover:bg-gray-800 rounded-full  w-[25%] ${
                      mode === "toolsused" ? "bg-gray-800 text-red-500" : ""
                    }`}
                  >
                    ToolsUsed
                  </motion.li>

                  <motion.li
                    onClick={() => {
                      setMode("projectsundertaken");
                      setboolean(false);
                    }}
                    whileHover={{
                      rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
                      scale: 1.05,
                    }}
                    className={`py-3 font-semibold hover:text-red-400 hover:transition-color  hover:bg-gray-800 rounded-full w-[25%] ${
                      mode === "projectsundertaken"
                        ? "bg-gray-800 text-red-500"
                        : ""
                    } `}
                  >
                    Skills
                  </motion.li>
                </ul>
              </motion.div>
              <div className="flex justify-evenly text-2xl animate-bounce text-red-500 my-4">
                <IoIosArrowUp
                  onClick={() => sethamburgerboolen(!hamburgerboolean)}
                ></IoIosArrowUp>
              </div>

            </div>
          ) : (
            <div className="flex justify-evenly">
              <FaChevronCircleDown
                className="my-auto text-5xl hover:text-[#C70039] text-teal-500 animate-bounce"
                onClick={() => sethamburgerboolen(!hamburgerboolean)}
              ></FaChevronCircleDown>
            </div>
          )}
          <div>
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

            {/* footer */}
            {/* <div className="bg-[#FFC300] px-12 text-left py-4 inline-block align-bottom">
            <h2 className="text-2xl font-sans font-semibold text-white">
              Thank you !
            </h2>
          </div> */}
          </div>
        </div>
      </div>
      <div className="bg-[#C70039]  flex justify-between px-36 sm-flex col">
        <h2 className="text-slate-400 text-md">CopyRight@2021</h2>
        <h2 className="text-slate-400 text-md">All Rights Reserved</h2>
      </div>
    </div>
  );
}
