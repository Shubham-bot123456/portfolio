import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function HamburgerMenu(props) {
  return (
    <motion.div
      className="border-2 border-teal-500 mx-auto lg:w-[70%] sm:w-[30%] lg:rounded-full rounded-xl text-gray-900 py-1 text-center bg-teal-600"
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
      <ul className="lg:flex justify-evenly px-2">
        <motion.li
          className={`py-3 font-semibold  hover:text-red-400 hover:transition-color hover:bg-gray-800 rounded-full  lg:w-[25%] ${
            props.currentMode === "objective" ? "bg-gray-800 text-red-500" : ""
          }`}
          onClick={() => {
            props.somemode("objective");
            props.boolean(false);
          }}
          whileHover={{
            rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
            scale: 1.05,
          }}
        >
          Objective
        </motion.li>

        <motion.li
          onClick={() => {
            props.somemode("workexperience");
            props.boolean(false);
          }}
          whileHover={{
            rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
            scale: 1.05,
          }}
          className={`py-3 lg:ml-8 lg:mr-8 font-semibold hover:text-red-400 hover:transition-color hover:bg-gray-800 rounded-full lg:w-[25%] ${
            props.currentMode === "workexperience"
              ? "bg-gray-800 text-red-500"
              : ""
          }`}
        >
          Work experience
        </motion.li>

        <motion.li
          onClick={() => {
            props.somemode("toolsused");
            props.boolean(false);
          }}
          whileHover={{
            rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
            scale: 1.05,
          }}
          className={`py-3 lg:ml-8 lg:mr-12 font-semibold hover:text-red-400 hover:transition-color hover:bg-gray-800 rounded-full  lg:w-[25%] ${
            props.currentMode === "toolsused" ? "bg-gray-800 text-red-500" : ""
          }`}
        >
          ToolsUsed
        </motion.li>

        <motion.li
          onClick={() => {
            props.somemode("projectsundertaken");
            props.boolean(false);
          }}
          whileHover={{
            rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
            scale: 1.05,
          }}
          className={`py-3 font-semibold hover:text-red-400 hover:transition-color  hover:bg-gray-800 rounded-full lg:w-[25%] ${
            props.currentMode === "projectsundertaken"
              ? "bg-gray-800 text-red-500"
              : ""
          } `}
        >
          Skills
        </motion.li>
      </ul>
    </motion.div>
  );
}
