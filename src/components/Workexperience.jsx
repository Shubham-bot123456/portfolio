import React from "react";
import workexperience from "./f_workexperience.png";
import { motion, easeInOut } from "framer-motion";

export default function Workexperience() {
  return (
    <motion.div
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
      className="flex-row  mx-14 my-5 py-5 px-10  shadow-xl  rounded-xl  transform transition-all scale-100 duration-700 border-2 border-teal-600 "
    >
      <motion.img
        src={workexperience}
        className="w-[120px] h-[120px] mx-auto my-3  my-auto"
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
      <div className="text-left my-auto mx-5x">
        <h2 className="align-middle font-sans font-bold text-xl text-teal-600">
          WORK EXPERIENCE
        </h2>
        <p className="my-2 mx-3 text-slate-500">
          <p>
            Java Backend Developer, Tata Consultancy Services , Pune ,
            Maharashtra. (Oct 2021 – Present){" "}
          </p>
          <p>
            Developed and maintained RESTful APIs for a large-scale logistic and
            mail platform using Spring Boot, resulting in improved user
            experience and increased customer satisfaction.{" "}
          </p>
          <p>
            {" "}
            Implemented caching mechanisms both in memory and centralized
            (Redis) and optimized database queries, leading to a 20% reduction
            in API response times.
          </p>
          <p>
            Collaborated with the frontend team to design and implement API
            contracts, ensuring seamless integration between frontend and
            backend components.{" "}
          </p>
          <p>
            Demonstrated strong problem-solving skills in identifying and
            resolving complex issues within the application. Reduced production
            defects by 30% .
          </p>
          <p>
            Conducted unit testing and participated in code reviews to maintain
            code quality and identify potential issues.
          </p>
          <p>
            Utilized SQL queries and Hibernate ORM to manage and optimize the
            database operations.
          </p>
          <p>
            {" "}
            Managed project dependencies efficiently using Maven/Gradle,
            ensuring a smooth build process and easy collaboration with team
            members.{" "}
          </p>
          <p>
            Collaborated effectively in an Agile development environment using
            Scrum, participating in sprint planning and contributing to sprint
            goals.{" "}
          </p>
          <p>
            Leveraged frameworks and libraries like Hibernate, Lombok, and
            Spring Cloud to enhance application functionality and development
            efficiency.{" "}
          </p>
          <p>
            Maintained clear and comprehensive technical documentation for the
            codebase and APIs using Atlassian Confluence, facilitating better
            knowledge sharing within the team.
          </p>
        </p>
      </div>
    </motion.div>
  );
}
