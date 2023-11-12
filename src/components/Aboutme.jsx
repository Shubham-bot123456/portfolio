import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import objective from "./objectiveimg.png";

export default function Aboutme() {
  const [originalState, setOriginalState] = useState(false);
  return originalState ? (
    <div className="mx-14 my-10 py-10 px-10 flex justify-evenly shadow-xl bg-[#A9DFBF] rounded-lg hover:bg-gray-500 hover:text-white hover:transition-colors">
      {/* photo */}
      <div>
        <img src={objective} className="w-[400px] h-[200px]"></img>
      </div>
      <div className="text-left my-auto mx-5x">
        <h2 className="font-sans font-bold text-xl">Objective</h2>
        <p className="my-2 mx-3">
          Motivated and skilled Java Backend Developer with 2 years of hands-on
          experience in building high-performance and scalable server-side
          applications. Proficient in Java, Spring Framework, and SQL databases.
          Seeking a challenging role to contribute my expertise in software
          development and problem-solving to deliver innovative solutions.
        </p>
      </div>
    </div>
  ) : (
    <div className="mx-14 my-10 py-10 px-10 flex justify-evenly shadow-xl bg-red-500 rounded-lg hover:bg-gray-500 hover:text-white hover:transition-colors">
      {/* photo */}
      <div className="text-left">
        <div className="flex justify-between">
          <h2 className="font-sans font-bold text-xl">About me</h2>
        </div>
        <p className="my-2 mx-3">
          B.Tech in Electrical Engineering , Government College of Engineering,
          Karad. 2017 - 2021 Web Development. Distinction Relevant coursework:
          Data Structures and Algorithms, Object-Oriented Programming, Database
          Management.
        </p>
      </div>
    </div>
  );
}
