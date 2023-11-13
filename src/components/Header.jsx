import React, { useEffect, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import AboutMe from "./Aboutme";
import objective from "./objectiveimg.png";
import workexperience from "./workexperienceimg.jpeg";
import { PiHamburgerDuotone } from "react-icons/pi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import workimg from "./work3.png";
import toolsused from "./toolsused.png";
import skills from "./skills.png";
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
        "text-white bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color border-2 border-teal-600 "
      );
    else
      setStyleAboutMe(
        "text-white bg-gray-800 rounded-xl px-10 py-2.3 font-semibold  hover:text-teal-600 hover:transition-color "
      );
  }, [boolean]);
  return (
    <div className="bg-gray-950 h-screen">
      <div className="flex justify-between px-5 py-3 ">
        <div className="flex justify-evenly">
          <PiHamburgerDuotone
            className="my-auto text-3xl bg-[#C70039] hover:border-white"
            onClick={() => sethamburgerboolen(!hamburgerboolean)}
          ></PiHamburgerDuotone>
          <h1 className=" pl-2 font-sans text-2xl font-bold text-teal-600 hover:text-red-400 hover:transition-colors">
            Portfolio.
          </h1>
          <p className="text-slate-400 font-semibold inline-block align-baseline my-auto mx-4">
            ~ shubham jadhav
          </p>
        </div>
        <div className="flex justify-evenly">
          <ul className="flex justify-evenly px-10">
            <BsGithub className="my-auto text-2xl text-teal-600 hover:text-red-400 mx-6"></BsGithub>
            <a
              href="https://www.linkedin.com/in/shubham-jadhav-90446519a/"
              className="my-auto text-2xl text-teal-600 hover:text-red-400"
            >
              <BsLinkedin></BsLinkedin>
            </a>
          </ul>

          <button
            className={aboutMeButtonStyle}
            onClick={() => setboolean(!boolean)}
          >
            {boolean ? "about me (ON)" : "about me (OFF)"}
          </button>
        </div>
      </div>
      <div className="flex">
        {hamburgerboolean ? (
          <div className="h-screen bg-[#C70039]  text-white py-2 text-left transition-transform ease-in duration-1000 opacity-100">
            <ul>
              <div
                onClick={() => {
                  setMode("objective");
                  setboolean(false);
                }}
                className="flex justify-between hover:text-red-400 hover:transition-color mx-2  rounded-lg border-white border-spacing-11 hover:bg-gray-800"
              >
                <li className="py-3 ml-8  mr-12  font-semibold hover:text-red-400 hover:transition-color">
                  Objective
                </li>
              </div>
              <div
                onClick={() => {
                  setMode("workexperience");
                  setboolean(false);
                }}
                className="flex justify-between hover:text-red-400 hover:transition-color mx-2  rounded-lg border-white border-spacing-11 hover:bg-gray-800"
              >
                <li className="py-3 ml-8 mr-12 font-semibold hover:text-red-400 hover:transition-color ">
                  Work experience
                </li>
              </div>
              <div
                onClick={() => {
                  setMode("toolsused");
                  setboolean(false);
                }}
                className="flex justify-between hover:text-red-400 hover:transition-color mx-2  rounded-lg border-white border-spacing-11 hover:bg-gray-800"
              >
                <li className="py-3 ml-8 mr-12 font-semibold hover:text-red-400 hover:transition-color">
                  Tools Used
                </li>
              </div>
              <div
                onClick={() => {
                  setMode("projectsundertaken");
                  setboolean(false);
                }}
                className="flex justify-between hover:text-red-400 hover:transition-color mx-2  rounded-lg border-white border-spacing-11 hover:bg-gray-800"
              >
                <li className="py-3 ml-8 mr-12 font-semibold hover:text-red-400 hover:transition-color">
                  Skills
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <div />
        )}
        <div>
          {boolean ? (
            <AboutMe></AboutMe>
          ) : (
            <>
              {mode === "objective" ? (
                <div className="mx-14 my-auto py-10 px-10  shadow-xl  rounded-lg hover:transition-colors">
                  {/* photo */}
                  <div>
                    <img
                      src={objective}
                      className="w-[150px] h-[100px] mx-auto"
                    ></img>
                  </div>
                  <div className="text-middle  my-auto mx-5x">
                    <h2 className="font-sans text-teal-600 font-bold text-xl">
                      Objective
                    </h2>
                    <p className="my-2 mx-3 text-slate-500">
                      Motivated and skilled Java Backend Developer with 2 years
                      of hands-on experience in building high-performance and
                      scalable server-side applications.
                      <br />
                      Proficient in Java, Spring Framework, and SQL databases.
                      Seeking a challenging role to contribute my expertise in
                      software development and problem-solving to deliver
                      innovative solutions.
                    </p>
                  </div>
                </div>
              ) : mode === "workexperience" ? (
                <div className="mx-14 my-10 py-10 px-10 flex justify-evenly shadow-xl bg-[#A9DFBF] rounded-lg hover:bg-gray-500 hover:text-white hover:transition-colors">
                  <img src={workimg} className="w-[300px] h-[180px]"></img>

                  <div className="text-left my-auto mx-5x">
                    <h2 className="font-sans font-bold text-xl">
                      Work Experience
                    </h2>
                    <p className="my-2 mx-3">
                      Java Backend Developer, Tata Consultancy Services , Pune ,
                      Maharashtra. (Oct 2021 – Present) <br />
                      Developed and maintained RESTful APIs for a large-scale
                      logistic and mail platform using Spring Boot, resulting in
                      improved user experience and increased customer
                      satisfaction. <br /> Implemented caching mechanisms both
                      in memory and centralized (Redis) and optimized database
                      queries, leading to a 20% reduction in API response times.
                      <br />
                      Collaborated with the frontend team to design and
                      implement API contracts, ensuring seamless integration
                      between frontend and backend components. <br />
                      Demonstrated strong problem-solving skills in identifying
                      and resolving complex issues within the application.
                      Reduced production defects by 30% . <br /> Conducted unit
                      testing and participated in code reviews to maintain code
                      quality and identify potential issues. <br />
                      Utilized SQL queries and Hibernate ORM to manage and
                      optimize the database operations. <br /> Managed project
                      dependencies efficiently using Maven/Gradle, ensuring a
                      smooth build process and easy collaboration with team
                      members. <br />
                      Collaborated effectively in an Agile development
                      environment using Scrum, participating in sprint planning
                      and contributing to sprint goals. <br /> Leveraged
                      frameworks and libraries like Hibernate, Lombok, and
                      Spring Cloud to enhance application functionality and
                      development efficiency. <br /> Maintained clear and
                      comprehensive technical documentation for the codebase and
                      APIs using Atlassian Confluence, facilitating better
                      knowledge sharing within the team.
                    </p>
                  </div>
                </div>
              ) : mode === "toolsused" ? (
                <div className="mx-14 my-10 py-10 px-10 flex justify-evenly shadow-xl bg-[#A9DFBF] rounded-lg hover:bg-gray-500 hover:text-white hover:transition-colors">
                  <img
                    src={toolsused}
                    className="w-[100px] h-[100px] my-auto mr-10"
                  ></img>

                  <div className="text-left my-auto mx-5x">
                    <h2 className="font-sans font-bold text-xl">Tools Used</h2>
                    <p className="my-2 mx-3">
                      IDE : Intellij Idea, Eclipse , Visual Studio Code ,
                      Sublime Text , VIM.  Database Clients : DBeaver(Universal
                      Client), Pg Admin. <br />
                      API Testing : Postman. <br /> Git GUI Tools : Git
                      Tortoise, Git GUI <br />
                      Other Tools : Notepad++, Beyond compare,
                    </p>
                  </div>
                </div>
              ) : mode === "projectsundertaken" ? (
                <div className="mx-14 my-10 py-10 px-10 flex justify-evenly shadow-xl bg-[#A9DFBF] rounded-lg hover:bg-gray-500 hover:text-white hover:transition-colors">
                  <img src={skills} className="w-[300px] h-[180px]"></img>

                  <div className="text-left my-auto mx-5x">
                    <h2 className="font-sans font-bold text-xl">Skills</h2>
                    <p className="my-2 mx-3">
                      Programming Languages: Java, Javascript, SQL. <br /> Java
                      Frameworks: Spring Boot, Hibernate, React JS (Basics){" "}
                      <br />
                      Well versed with IDE such as Intellij idea , Eclipse.{" "}
                      <br />
                      RESTful API Design and Implementation <br /> Database
                      Management: PostgreSQL <br />
                      Version Control: Git <br />
                      Build Tools: Maven <br /> Heavy user of Terminal based
                      editors such as VIM (NeoVim). <br /> Familiarity with
                      Agile Methodologies <br />
                      Problem-Solving and Troubleshooting Skills <br /> Strong
                      Team Player and Effective Communicator <br />
                      Valuable experience working with the AWS Services such as
                      EC2, S3, RDS, Lambda, SQS, SNS, VPC, EFS. <br />
                      Among top 10% of Top typist in the world with reference to
                      TypeRacer.
                    </p>
                  </div>
                </div>
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
  );
}
