import React, { useState } from "react";
import Experiences from "./Experiences";

export default function Resume() {

  const [experienceData, setExperienceData] = useState(true);

  return (
    <section id="resume" className="w-full pt-10 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h1 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize" data-aos="zoom-in">
            Internships & Projects
          </h1>
        </div>
      </div>
      <div className="mb-5" data-aos="zoom-in">
        <ul className="w-full grid grid-cols-1 md:grid-cols-3">
          <li onClick={()=> setExperienceData(true)} className={`${experienceData ? "border-designColor rounded-sm" : "border-transparent"} resume-li`}>Experiences</li>
        </ul>
      </div>
      <Experiences />
    </section>
  );
}
