import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import objective from "./objectiveimg.png";
import aboutmeicon from "./aboutmeicon.png";

export default function Aboutme() {
  return (
    <div className="mx-14 my-10 py-10 px-10 shadow-xl">
      <img src={aboutmeicon} className="mx-auto w-[120px] h-[120px] mb-3"></img>
      <div>
        <h2 className="font-sans font-bold text-xl text-teal-600">ABOUT ME</h2>
        <p className="my-2 mx-3 text-slate-500">
          B.Tech in Electrical Engineering , Government College of Engineering,
          Karad. 2017 - 2021 Web Development. Distinction Relevant coursework:
          Data Structures and Algorithms, Object-Oriented Programming, Database
          Management.
        </p>
      </div>
    </div>
  );
}
