import React from "react";

export default function ResumeCard(props) {
  return (
    <div className="w-full h-auto group flex" data-aos="zoom-in">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full bg-black bg-opacity-60 -top-2 -left-3 flex justify-center items-center">
          <span className="w-3 h-3 rounded-full bg-gray-400 inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-40 hover:bg-opacity-70 duration-300 rounded-lg px-5 md:px-8 py-5 md:py-8 flex flex-col justify-center gap-3 md:gap-8 shadow-shadowOne">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-base md:text-xl font-semibold group-hover:text-white duration-300">{props.title}</h2>
            <p className="text-xs md:text-sm text-gray-400 group-hover:text-white duration-300">{props.subTitle}</p>
            <p className="text-xs md:text-sm text-gray-400 group-hover:text-white duration-300"> {props.studyYear} </p>
          </div>
          <div className="w-auto h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium px-3">
            <p> {props.result} </p>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300"> {props.desc} </p>
        </div>
      </div>
    </div>
  );
}
