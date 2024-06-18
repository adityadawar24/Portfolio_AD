import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="w-full h-16 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont px-5 lg:px-10">
      <div>
       Aditya Dawar
      </div>
      <div>
        <ul className="hidden lg:inline-flex gap-10 items-center">
          {navLinksdata.map((navLink) => {
            return (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={navLink._id}
              >
                <Link
                  activeClass="active"
                  to={navLink.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <span
          onClick={handleToggle}
          className="text-3xl lg:hidden w-10 h-10 inline-flex items-center justify-center text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ x: "-80%", opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
              exit={{ x: "-80%", opacity: 0, transition: { duration: 0.5 } }}
              // transition={{ duration: 0.5 }}
              className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-designColor p-4 scrollbar-hide"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <span
                    onClick={handleToggle}
                    className="text-2xl text-white cursor-pointer"
                  >
                    <HiArrowLeft />
                  </span>
                </div>
                <div className="flex flex-col gap-10">
                  <div className="flex justify-center items-center">
                    Hello There!!
                  </div>
                  <div>
                    <ul className="flex flex-col gap-4">
                      {navLinksdata.map((navLink) => {
                        return (
                          <li
                            className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-bodyColor duration-300"
                            key={navLink._id}
                          >
                            <Link
                              activeClass="active-toggle-menu"
                              to={navLink.link}
                              onClick={handleToggle}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              {navLink.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
