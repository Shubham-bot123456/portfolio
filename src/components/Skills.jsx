import React from "react";
import { motion, easeInOut } from "framer-motion";
import skills from "./skillspng.png";

export default function Skills() {
  return (
    <motion.div
      className="flex flex-col border-2 border-teal-600 rounded-xl mx-14 my-5 py-5 px-10 transform transition-all scale-100 duration-700"
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
          src={skills}
          className="w-[120px] h-[120px] mx-auto "
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
      <div className="my-auto mx-5x text-left px-5 mt-3">
        <h2 className="font-sans font-bold text-2xl text-teal-600">SKILLS</h2>
        <p className="my-2 mx-3 text-slate-500">
          <p>Programming Languages: Java, Javascript, SQL.</p>
          <p>Java Frameworks: Spring Boot, Hibernate, React JS (Basics) </p>
          <p>Well versed with IDE such as Intellij idea , Eclipse.</p>
          <p> RESTful API Design and Implementation</p>{" "}
          <p> Database Management: PostgreSQL </p> <p>Version Control: Git</p>
          <p>Build Tools: Maven</p>
          <p> Heavy user of Terminal based editors such as VIM (NeoVim). </p>
          <p>Familiarity with Agile Methodologies</p>
          <p>Problem-Solving and Troubleshooting Skills </p>
          <p> Strong Team Player and Effective Communicator </p>
          <p>
            Valuable experience working with the AWS Services such as EC2, S3,
            RDS, Lambda, SQS, SNS, VPC, EFS.{" "}
          </p>
          <p>
            Among top 10% of Top typist in the world with reference to
            TypeRacer.
          </p>
        </p>
      </div>
    </motion.div>
  );
}
