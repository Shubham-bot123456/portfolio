import React, { useState } from "react";
import aboutmeicon from "./aboutmeicon.png";
import myimage from "./shubhamimage.jpeg";

export default function Aboutme() {
  const [boolean, setboolean] = useState(false);
  return (
    <div className="mx-14 my-5 py-5 px-10 shadow-xl">
      <img
        src={boolean ? myimage : aboutmeicon}
        className="mx-auto w-[200px] h-[200px] mb-3 rounded-full border-teal-600 border-2 border-spacing-6 hover:transition-colors"
        onClick={() => setboolean(!boolean)}
      ></img>
      <div>
        <h2 className="font-sans font-bold text-xl text-teal-600">ABOUT ME</h2>
        <p className="my-2 mx-3 text-slate-500">
          B.Tech in Electrical Engineering , Government College of Engineering,
          Karad. 2017 - 2021 . Currently working in Tata Consultancy Services
          Pune as Backend Engineer with the overall relevent experience of 2
          years in development.
        </p>
      </div>
    </div>
  );
}
