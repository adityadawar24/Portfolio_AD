import React from "react";
import i1 from "../../assets/images/devicemanage.webp";
import i2 from "../../assets/images/emailclient.png";
import i3 from "../../assets/images/eshopp.jpg";
import i4 from "../../assets/images/imagecomp.png";
import i5 from "../../assets/images/newsmonkeyy.png";
import i6 from "../../assets/images/weather.jpg";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="w-full pt-10 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center mb-14">
        <div className="flex flex-col gap-4 font-titleFont">
          <h1 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize" data-aos="zoom-in">
             My Portfolio 
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
        <ProjectCard title="Eshop (Reactjs & Tailwind CSS)" desc="Developed a responsive E-commerce site using ReactJS and Tailwind CSS, showcasing over 1000 products. Integrated a Razorpay Payment Gateway processing 50+ transactions daily and Google Maps for location services. Used React hooks for state management and API integration for data retrieval." coverSrc={i3} githubLink="https://github.com/adityadawar24/Eshop" />
        <ProjectCard title="Email client & Schedule (MERN Stack)" desc="Designed a full-stack app for 200+ users to manage 500+ recurring emails. Contributed to frontend using React for a seamless user experience. Enhanced security with oAuth, achieving 99.9% uptime. Built frontend with React and backend with Node, Express, and MongoDB." coverSrc={i2} githubLink="https://github.com/adityadawar24/Emailing-client-Schedular" />
        <ProjectCard title="Device location manager (MERN Stack)" desc="Welcome to the Device location manager Project a user-friendly interface for tracking and managing 100+ devices. Integrated MongoDB for scalable storage and Express.js for backend API. Engineered device registration, status updates, and alerts, boosting efficiency by 40%. Ensured secure access with user authentication and authorization." coverSrc={i1} githubLink="https://github.com/adityadawar24/Device_location_manage" />
        <ProjectCard title="iMAGE Compression (Machine Learning)" desc="Led a 5-member team under Prof. Sumit Kumar Yadav, IIT Roorkee. Created an image compression project using Gaussian Mixture Model, achieving 40% compression. Implemented resizing techniques for uniform dimensions, attaining 97.9% accuracy through iterative component adjustments." coverSrc={i4} githubLink="https://github.com/adityadawar24/Image_Compression" />
        <ProjectCard title="NEws app (Reactjs)" desc="Developed an integrated application for displaying news articles using ReactJS. Utilized React hooks for state management and fetched data from a News API. Enhanced efficiency with react-router, async/await, JSON, and implemented infinite scrolling for an improved user experience." coverSrc={i5} githubLink="https://github.com/adityadawar24/NewsMonkey" />
        <ProjectCard title="Weather app (React JS & Tailwind css)" desc="A Weather App using  Tailwind CSS and ReactJS for real-time, location-specific updates. Integrated a weather API for comprehensive insights. Enhanced user planning with a UI showcasing detailed daily and hourly forecasts, improving user awareness and experience." coverSrc={i6} githubLink="https://github.com/adityadawar24/Weather-app2" />
      </div>
    </section>
  );
}