import React from "react";
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaGit, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiFirebase, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

export default function Features() {
  return (
    <section id="features" className="w-full pt-10 pb-10 md:pb-20" style={{ backgroundColor: 'rgb(10,10,10)' }}>
      <div className="flex justify-center items-center text-center mb-14">
        <div className="flex flex-col gap-4 font-titleFont">
          <h3
            className="text-sm md:text-base uppercase font-titleFont text-gray-400"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-offset="0"
          >
            Features
          </h3>
          <h1
            className="text-2xl md:text-3xl text-white font-bold capitalize"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-offset="0"
          >
            Tech Stack
          </h1>
        </div>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8"
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-offset="0"
      >
        <div className="flex justify-center">
          <SiCplusplus className="w-20 h-20 md:w-24 md:h-24 text-blue-500 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <FaReact className="w-20 h-20 md:w-24 md:h-24 text-cyan-400 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <FaJs className="w-20 h-20 md:w-24 md:h-24 text-yellow-400 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <FaNodeJs className="w-20 h-20 md:w-24 md:h-24 text-green-600 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <SiFirebase className="w-20 h-20 md:w-24 md:h-24 text-yellow-500 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <SiExpress className="w-20 h-20 md:w-24 md:h-24 text-gray-700 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <SiMongodb className="w-20 h-20 md:w-24 md:h-24 text-green-500 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <FaDatabase className="w-20 h-20 md:w-24 md:h-24 text-blue-600 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <SiTailwindcss className="w-20 h-20 md:w-24 md:h-24 text-teal-400 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <FaHtml5 className="w-20 h-20 md:w-24 md:h-24 text-orange-600 hover:scale-110 transition-transform" />
        </div>
        <div className="flex justify-center">
          <FaGit className="w-20 h-20 md:w-24 md:h-24 text-red-500 hover:scale-110 transition-transform" />
        </div>
      </div>
    </section>
  );
}
