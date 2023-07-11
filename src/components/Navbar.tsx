import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const socialIcons = (
    <div className="flex space-x-4">
      <SocialIcon
        url="https://www.linkedin.com/in/wojciech-pieczonka-326710166/"
        fgColor="gray"
        bgColor="transparent"
        className="rounded-full bthover"
      />
      <SocialIcon
        url="https://www.github.com/wp9975"
        fgColor="gray"
        bgColor="transparent"
        target="_blank"
        className="rounded-full bthover"
      />
    </div>
  );

  const navLinks = (
    <motion.nav
      className="hidden space-x-6 text-gray-300 md:flex md:space-x-8"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="#about" className="text-lg transition-all duration-300 border-white cursor-pointer hover-link hover:border-t-2">
        About
      </Link>
      <Link href="#skills" className="text-lg transition-all duration-300 border-white cursor-pointer hover-link hover:border-t-2">
        Skills
      </Link>
      <Link href="#projects" className="text-lg transition-all duration-300 border-white cursor-pointer hover-link hover:border-t-2">
        Projects
      </Link>
      <Link href="#contact" className="text-lg transition-all duration-300 border-white cursor-pointer hover-link hover:border-t-2">
        Contact
      </Link>
    </motion.nav>
  );

  return (
    <div className="fixed z-50 w-full p-4 bg-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        {isOpen ? null : socialIcons}
        <AnimatePresence>
          {navLinks}
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-10 transition-all duration-500 ease-in-out bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col items-center justify-center h-full space-y-8 text-2xl text-gray-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {socialIcons}
                <Link
                  href="#about"
                  onClick={toggleMenu}
                  className="px-6 py-3 cursor-pointer focus:ring-4 ring-white "
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  onClick={toggleMenu}
                  className="px-6 py-3 cursor-pointer focus:ring-4 ring-white"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  onClick={toggleMenu}
                  className="px-6 py-3 cursor-pointer focus:ring-4 ring-white"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  onClick={toggleMenu}
                  className="px-6 py-3 cursor-pointer focus:ring-4 ring-white"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={toggleMenu}
          className="absolute top-0 right-0 z-50 h-20 p-3 lg:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M 3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
