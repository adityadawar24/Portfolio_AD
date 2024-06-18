import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-8 font-titleFont" data-aos="zoom-in">
      </div>
      <div className="w-full">
        <div>
          <div className="w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-10" data-aos="zoom-in">
            <ResumeCard
              title="Frontend Dev Intern"
              subTitle="Robotronix"
              studyYear="(May 2023 - July 2023)"
              result="Remote"
              desc="Built a responsive E-commerce site with Tailwind CSS, and ReactJS, showcasing 1000+ products. Integrated a Payment Gateway and Google Maps, managing state with React hooks and APIs, processing 500+ transactions daily"
            />
            <ResumeCard
              title="Intern"
              subTitle="Safron Umbrella"
              studyYear="(Dec 2023 - Jan 2024)"
              result="Remote"
              desc="In Safron Umbrella developed a user-friendly interface for managing 100+ devices with MongoDB and Express.js. Implemented device registration, status updates, and alerts, boosting efficiency by 40%. Ensured secure access with user authentication and authorization."
            />
            <ResumeCard
              title="Project"
              subTitle="Prof.Sumit kumar Yadav"
              studyYear="(June 2023 - June 2023)"
              result="IIT Roorkee"
              desc="Led a 5-member team under Prof. Sumit Kumar Yadav at IIT Roorkee. Developed an image compression project using Gaussian Mixture Model, achieving 40% compression and 97.9% accuracy with resizing techniques and iterative component adjustments"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
