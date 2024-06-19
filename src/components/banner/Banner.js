import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdCloudDownload, IoMdMail, IoMdCall } from "react-icons/io";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import resume from "../../assets/documents/Resume2024.pdf";
import PImg from "../../assets/images/PPP.jpeg";
import { Link } from "react-router-dom";

export default function Banner() {
  const [text] = useTypewriter({
    words: ["Frontend Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="w-full pt-10 md:pt-5 pb-20 flex flex-col gap-10 lgl:flex-row xl:gap-0 items-center font-titleFont"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Hi, I am{" "}
            <span className="text-designColor capitalize">Aditya Dawar</span>
          </h1>
          <h2
            className="text-lg md:text-3xl font-bold text-white"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>

          <p
            className="text-sm md:text-base font-bodyFont leading-6 tracking-wide text-gray-400"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            A graduate from IIT Roorkee and a passionate frontend developer.
            With a keen eye for detail, I specialize in creating user-friendly
            and effective solutions that enhance application performance, ease
            of maintenance, and user experience. Outside of coding, I enjoy
            video editing, dancing, playing football, and skateboarding. These
            interests keep me inspired and balanced.
          </p>

          <div className="w-full flex" data-aos="zoom-in" data-aos-delay="400">
            <button className="mt-5 w-auto px-4 h-10 lg:h-12 bg-[#141518] rounded-sm text-sm text-gray-400 tracking-wider hover:text-white hover:bg-designColor duration-300 flex gap-2 justify-center items-center">
              <a
                className="w-auto flex items-center gap-2"
                href={resume}
                download="Resume2024.pdf"
              >
                <span className="text-2xl lg:text-2xl">
                  <IoMdCloudDownload />
                </span>
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-5 lgl:gap-0 justify-between">
          <div>
            <h2
              className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-offset="0"
            >
              Find me in
            </h2>
            <div
              className="grid grid-cols-3 sml:grid-cols-4 gap-3 md:gap-4"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              <div className="bannerIcon">
                <Link
                  to="https://www.linkedin.com/in/aditya-dawar-625704235/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="bannerIcon">
                <Link
                  to="https://github.com/adityadawar24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </Link>
              </div>
              <div className="bannerIcon">
                <Link to="mailto:adityadawar1999@gmail.com">
                  <IoMdMail />
                </Link>
              </div>
              <div className="bannerIcon">
                <Link to="tel:+917000519809">
                  <IoMdCall />
                </Link>
              </div>
            </div>
          </div>
          {/* <div>
            <h2
              className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-offset="0"
            >
              Best skill on
            </h2>
            <div
              className="grid grid-cols-3 sml:grid-cols-4 gap-3 md:gap-4"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              <div className="bannerIcon">
                <FaReact />
              </div>
              <div className="bannerIcon">
                <FaNodeJs />
              </div>
              <div className="bannerIcon">
                <FaBootstrap />
              </div>
              <div className="bannerIcon">
                <SiTailwindcss />
              </div>
              <div className="bannerIcon">
                <SiMongodb />
              </div>
              <div className="bannerIcon">
                <SiSelenium />
              </div>
              <div className="bannerIcon">
                <SiNextdotjs />
              </div>
              <div className="bannerIcon">
                <FaDocker />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div
        className="w-full lgl:w-1/2 flex justify-center items-center relative rounded-lg"
        data-aos="zoom-in"
        data-aos-duration="1600"
      >
        <img
          className="w-[200px] lgl:w-[250px] h-auto z-10 rounded-3xl "
          src={PImg}
          alt="Aditya Dawar was here!"
        />
        {/* <div className="absolute bottom-0 w-[220px] h-[250px] lgl:w-[350px] lgl:h-[380px] shadow-shadowOne bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div> */}
      </div>
    </section>
  );
}
