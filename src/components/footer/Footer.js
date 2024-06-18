import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import titleLogo from "../../assets/images/title_logo.png";

export default function footer() {
  return (
    <section className="w-full pt-20 pb-5 h-auto grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 border-b-[1px] border-b-gray-900">
      <div className="w-full h-full flex flex-col gap-8" data-aos="zoom-in">
        <img className="w-[90%]" src={titleLogo} alt="shaed_logo" />
        <div>
          <h2
            className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Find me in
          </h2>
          <div className="flex gap-4" data-aos="zoom-in" data-aos-delay="200">
            <span className="footerIcon">
              <a
                href="https://www.facebook.com/shaed058/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </span>
            <span className="footerIcon">
              <a
                href="https://www.linkedin.com/in/shaednoor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
            <span className="footerIcon">
              <a
                href="https://www.instagram.com/shaed_noor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="footerIcon">
              <a
                href="https://github.com/syednoor058"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <h3
          className="text-md uppercase text-designColor tracking-wider"
          data-aos="zoom-in"
        >
          Quick Link
        </h3>
        <ul
          className="flex flex-col gap-2 lg:gap-4 font-titleFont font-medium py-3 lg:py-6 overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3
          className="text-md uppercase text-designColor tracking-wider"
          data-aos="zoom-in"
        >
          Resources
        </h3>
        <ul
          className="flex flex-col gap-2 lg:gap-4 font-titleFont font-medium py-3 lg:py-6 overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3
          className="text-md uppercase text-designColor tracking-wider"
          data-aos="zoom-in"
        >
          Developers
        </h3>
        <ul
          className="flex flex-col gap-2 lg:gap-4 font-titleFont font-medium py-3 lg:py-6 overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              API References
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
