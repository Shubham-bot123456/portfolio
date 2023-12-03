import React from "react";
import { motion, easeInOut } from "framer-motion";
import toolsused from "./toolsusing.png";

export default function Toolsused() {
  return (
    <motion.div
      className="flex flex-col rounded-xl border-2 border-teal-600 mx-14 my-5 py-5 px-10 rounded-xl  transform transition-all scale-100 duration-700"
      initial={{
        scale: "0%",
      }}
      animate={{
        scale: "100%",
      }}
      transition={{
        duration: 0.25,
        ease: easeInOut,
      }}
      exit={{
        scale: "0%",
      }}
    >
      <motion.img
        src={toolsused}
        className=" w-[100px] h-[100px]  mx-auto"
        initial={{
          scale: 1,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          delay: 0.5,
          duration: 0.75,
          ease: easeInOut,
        }}
        exit={{
          scale: 1,
        }}
        whileHover={{
          rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
        }}
      ></motion.img>

      <div className="text-left px-6">
        <h2 className="font-sans font-bold text-xl text-teal-600">
          Tools Used
        </h2>
        <p className="my-2 mx-3 text-slate-500">
          <p>
            IDE : Intellij Idea, Eclipse , Visual Studio Code , Sublime Text ,
            VIM.
          </p>
          <p>Database Clients : DBeaver(Universal Client), Pg Admin.</p>
          <p>API Testing : Postman.</p>
          <p>Git GUI Tools: Git Tortoise, Git GUI</p>
          <p>Other Tools : Notepad++, Beyond compare</p>
        </p>
      </div>
    </motion.div>
  );
}
