import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import objective from "./objectiveimg.png";

export default function Aboutme() {
  return (
    <div className="mx-14 my-10 py-10 px-10 flex justify-evenly shadow-xl bg-red-500 rounded-lg hover:bg-gray-500 hover:text-white hover:transition-colors border-white border-4 border-double border-spacing-3">
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
