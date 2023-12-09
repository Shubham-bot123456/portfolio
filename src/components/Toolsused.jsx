import React from "react";
import { motion, easeInOut } from "framer-motion";
import toolsused from "./toolsusing.png";

export default function Toolsused() {
  return (
    <motion.div
      className="flex flex-col border-dashed  rounded-xl border-2 border-teal-600 mx-14 my-5 py-5 px-10 transform transition-all scale-100 duration-700 w-[70%]"
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
      <div className="bg-gradient-to-tr from-pink-500 to-indigo-300 rounded-xl py-4">
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
      </div>
      <div className="text-left px-6 mt-2">
        <h2 className="font-mono font-bold text-xl text-teal-600">
          TOOLS USED
        </h2>
        <p className="my-2 mx-3 text-slate-500">
          <p className="py-2 hover:text-red-500">
            IDE : Intellij Idea, Eclipse , Visual Studio Code , Sublime Text ,
            VIM.
          </p>
          <p className="py-2 hover:text-red-500">
            Database Clients : DBeaver(Universal Client), Pg Admin.
          </p>
          <p className="py-2 hover:text-red-500">API Testing : Postman.</p>
          <p className="py-2 hover:text-red-500">
            Git GUI Tools: Git Tortoise, Git GUI
          </p>
          <p className="py-2 hover:text-red-500">
            Other Tools : Notepad++, Beyond compare
          </p>
        </p>
      </div>
    </motion.div>
  );
}
