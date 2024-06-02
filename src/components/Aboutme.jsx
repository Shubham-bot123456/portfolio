import React, { useEffect, useState } from "react";
import aboutmeicon from "./aboutmeicon.png";
import { motion, easeInOut } from "framer-motion";
import mytransparentImage from "./shubham-jadhav-transparent.png";
import { PiWhatsappLogo } from "react-icons/pi";

export default function Aboutme() {
  const [boolean, setboolean] = useState(false);
  const [dashedborder, setdashedborder] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setboolean(!boolean);
      clearTimeout();
    }, [1200]);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setdashedborder(!dashedborder);
      clearTimeout();
    }, [1200]);
  }, [new Date().getTime() / 200]);
  return (
    <motion.div
      className="h-[100%] lg:flex justify-evenly mx-14 my-5 py-5 px-10 transform transition-all focus:scale-100 focus:duration-1000 w-[100%]"
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
      <div className="lg:order-last">
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
          src={boolean ? mytransparentImage : aboutmeicon}
          className={`mx-auto lg:order-last w-[300px] h-[300px] my-2 border-spacing-6 hover:transition-colors ${
            boolean ? "border-4 border-teal-600 rounded-full" : ""
          } ${dashedborder ? "border-dashed" : ""}`}
          onClick={() => setboolean(!boolean)}
        ></motion.img>
      </div>
      <div className="text-left mx-6 my-auto">
        <h2 className="font-mono font-bold  text-teal-600 text-4xl">HI,</h2>
        <h3 className="font-mono font-bold  text-teal-600 text-4xl">
          I AM FULL-STACK DEVELOPER.
        </h3>
        <p className="my-4  text-slate-500 text-xl first-letter:2 font-mono">
          <p className="text-[]">
            B.Tech in Electrical Engineering,<br></br> Government College of
            Engineering, Karad.
          </p>{" "}
          <p>Working with Tata Consultancy Services (Backend Engineer).</p>
        </p>
        <motion.div
          className="flex justify-evenly border-2 border-teal-600 rounded-2xl lg:w-[30%] py-2 font-semibold text-teal-600"
          whileHover={{
            rotate: ["0deg", "2.5deg", "-2.5deg", "0deg"],
          }}
          onClick={() =>
            alert(
              "My WhatsApp No : 7219078954 \nEmail Id : sjadhav11999@gmail.com"
            )
          }
        >
          <p className="my-auto text-md">Contact Me</p>
          <PiWhatsappLogo className="text-3xl"></PiWhatsappLogo>
        </motion.div>
     
      </div>
    </motion.div>
  );
}
