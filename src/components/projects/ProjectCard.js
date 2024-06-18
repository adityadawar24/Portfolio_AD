import React from 'react';
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <div className='w-full px-5 py-5 rounded-lg shadow-shadowOne flex flex-col bg-black bg-opacity-40 hover:bg-opacity-70 group hover:bg-gradient-to-b transition-colors duration-500' data-aos="zoom-in" data-aos-offset="200">
        <div className='w-full h-auto overflow-hidden rounded-lg'>
            <img className='w-full h-[200px] object-cover group-hover:scale-110 duration-300 cursor-pointer' src={props.coverSrc} alt='project_cover_img' />
        </div>
        <div className='w-full mt-5 flex justify-between items-center gap-5'>
            <div>
                <h3 className='text-sm md:text-base uppercase text-designColor font-normal'>{props.title}</h3>
            </div>
            <div>
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a href={props.githubLink}><FaGithub /></a>
                </span>
            </div>
        </div>
        <div className='w-full'>
            <p className='text-gray-400 text-xs md:text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{props.desc}</p>
        </div>
    </div>
  )
}
