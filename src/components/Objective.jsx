import React from "react";
import targetpng from "./targetpng.png";
import { motion, easeInOut } from "framer-motion";
export default function Objective() {
  return (
    <motion.div
      className="flex flex-col my-5 mx-14 py-10 px-10 shadow-xl   tranform transition-all scale-100 duration-500 border-2 border-teal-600 rounded-xl"
      initial={{
        scale: "0%",
      }}
      animate={{
        scale: "100%",
      }}
      transition={{
        duration: 0.25,
      }}
      exit={{
        scale: "0%",
      }}
    >
      {/* photo */}
      <motion.img
        src={targetpng}
        className="w-[150px] h-[100px] mx-auto "
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
      <div className="text-middle  my-auto mx-5x text-left px-2">
        <h2 className="font-sans text-teal-600 font-bold text-xl">Objective</h2>
        <p className="my-2 mx-3 text-slate-500">
          <p>
            Motivated and skilled Java Backend Developer with 2 years of
            hands-on experience in building high-performance and scalable
            server-side applications.
          </p>
          <p>
            Proficient in Java, Spring Framework, and SQL databases. Seeking a
            challenging role to contribute my expertise in software development
            and problem-solving to deliver innovative solutions.
          </p>
        </p>
      </div>
    </motion.div>
  );
}
