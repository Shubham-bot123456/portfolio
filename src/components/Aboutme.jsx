import React, { useEffect, useState } from "react";
import aboutmeicon from "./aboutmeicon.png";
import myimage from "./shubhamimage.jpeg";
import { motion, easeInOut } from "framer-motion";

export default function Aboutme() {
  const [boolean, setboolean] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setboolean(!boolean);
      clearTimeout();
    }, [1200]);
  }, []);
  return (
    <motion.div
      className="flex flex-col justify-between mx-14 my-5 py-5 px-10 shadow-xl transform transition-all focus:scale-100 focus:duration-1000 border-2 border-teal-600 rounded-xl w-[70%]"
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
      <div className="bg-gradient-to-tr from-green-500 to-yellow-300 rounded-xl">
        <motion.img
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
          src={boolean ? myimage : aboutmeicon}
          className="mx-auto  w-[150px] h-[150px] my-2 rounded-full border-gray-600 border-4 border-spacing-6 hover:transition-colors "
          onClick={() => setboolean(!boolean)}
        ></motion.img>
      </div>
      <div className="text-left mx-6 my-auto mt-3">
        <h2 className="font-sans font-bold text-xl text-teal-600">ABOUT ME</h2>
        <p className="my-2 mx-3 text-slate-500">
          B.Tech in Electrical Engineering , Government College of Engineering,
          Karad. 2017 - 2021 . Currently working in Tata Consultancy Services
          Pune as Backend Engineer with the overall relevent experience of 2
          years in development.
        </p>
      </div>
    </motion.div>
  );
}
