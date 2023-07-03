import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaReact, FaHtml5, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import TechScroll from "./TechScroll/TechScroll";
import { motion } from "framer-motion";

const Section = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [iconState, setIconState] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const rotation = ((1 / 3) * scrollPosition) % 360;

  const getIconState = (rotation: number) => {
    const adjustedRotation = (rotation + 200) % 360;

    if (adjustedRotation >= 0 && adjustedRotation < 90) {
      return 0; // React
    } else if (adjustedRotation >= 90 && adjustedRotation < 180) {
      return 1; // HTML5
    } else if (adjustedRotation >= 180 && adjustedRotation < 270) {
      return 2; // Node.js
    } else if (adjustedRotation >= 270 && adjustedRotation < 360) {
      return 3; // CSS3
    } else {
      throw new Error("Invalid rotation");
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (inView) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      const updateIconState = () => {
        try {
          const newIconState = getIconState(rotation);
          setIconState(newIconState);
        } catch (e) {
          console.error(e);
        }
      };

      updateIconState();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      
    }
  }, [inView, rotation]);

  const showing = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      id="skills"
      ref={ref}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={showing}
      transition={{ duration: 1 }}
      className="relative flex flex-wrap w-full py-20 mx-auto max-w-screen-2xl"
    >
      <div className="w-full md:flex ">
        <div className="relative p-8 transform md:flex ">
          <div
            className={` flex items-center transition-all duration-500 justify-center border-8 rounded-full w-96 h-96 ${
              iconState === 0
                ? "border-gray-600"
                : iconState === 1
                ? "border-slate-700"
                : iconState === 2
                ? "border-green-900"
                : "border-blue-900"
            }`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <FaReact
              className={`fixed p-1 text-5xl  rounded-full ${
                iconState === 0 ? " bg-gray-600 text-white" : "bg-white"
              }`}
              style={{zIndex: 1, transform: " translate(-390%, 50%)" }}
            />
            <FaHtml5
              className={`fixed p-1 text-5xl  rounded-full ${
                iconState === 1 ? "bg-slate-700 text-white" : "bg-white"
              }`}
              style={{zIndex: 1, transform: " translate(50%, 390%)" }}
            />
            <FaNodeJs
              className={`fixed p-1 text-5xl  rounded-full ${
                iconState === 2 ? "bg-green-900 text-white" : "bg-white"
              }`}
              style={{zIndex: 1, transform: " translate(390%, -50%)" }}
            />
            <FaCss3Alt
              className={`fixed p-1 text-5xl  rounded-full ${
                iconState === 3 ? "bg-blue-900 text-white" : "bg-white"
              }`}
              style={{zIndex: 1, transform: " translate(-50%, -390%)" }}
            />
          </div>
        </div>

        <div className="relative w-full p-4 space-y-4 text-white ">
          <h2 className="text-4xl">Skills</h2>

          <Accordion allowMultiple={false} index={iconState} className="">
            <AccordionItem
              className={`p-3 transition-all duration-500 ${
                iconState === 0 ? "bg-gray-600 text-white" : ""
              }`}
              onMouseEnter={() => setIconState(0)}
              onMouseLeave={() => setIconState(iconState)}
            >
              <AccordionButton>
                <h3 className="text-2xl">React</h3>
              </AccordionButton>
              <AccordionPanel>
                <p>
                React is a JavaScript library used to build user interfaces for web and mobile applications. It allows developers to create reusable UI components and manage the state of their applications efficiently, making it easier to build complex and interactive interfaces.
                </p>
              </AccordionPanel>
            </AccordionItem>
            {/* __________________________________________________________ */}
            <AccordionItem
              className={`p-3 transition-all duration-500 ${
                iconState === 1 ? "bg-slate-700 text-white" : ""
              }`}
              onMouseEnter={() => setIconState(1)}
              onMouseLeave={() => setIconState(iconState)}
            >
              <AccordionButton>
                <h3 className="text-2xl">HTML5</h3>
              </AccordionButton>
              <AccordionPanel>
                <p>
                HTML5 is the latest version of the markup language used to create and structure content on the web, including text, images, videos, and more. It includes new elements and attributes that make it easier to create interactive and dynamic web pages.
                </p>
              </AccordionPanel>
            </AccordionItem>
            {/* __________________________________________________________ */}
            <AccordionItem
              className={`p-3 transition-all duration-500 ${
                iconState === 2 ? "bg-green-900 text-white" : ""
              }`}
              onMouseEnter={() => setIconState(2)}
              onMouseLeave={() => setIconState(iconState)}
            >
              <AccordionButton>
                <h3 className="text-2xl">TypeScript</h3>
              </AccordionButton>
              <AccordionPanel>
                <p>
                TypeScript is a statically-typed superset of JavaScript that adds optional type annotations and other advanced features, helping developers catch errors early and write more scalable and maintainable code. It compiles to plain JavaScript and is widely used in modern web development.
                </p>
              </AccordionPanel>
            </AccordionItem>
            {/* __________________________________________________________ */}
            <AccordionItem
              className={`p-3 transition-all duration-500 ${
                iconState === 3 ? "bg-blue-900 text-white" : ""
              }`}
              onMouseEnter={() => setIconState(3)}
              onMouseLeave={() => setIconState(iconState)}
            >
              <AccordionButton>
                <h3 className="text-2xl">CSS3</h3>
              </AccordionButton>
              <AccordionPanel>
                <p>
                CSS3 is the latest version of the Cascading Style Sheets language used to define the look and layout of web pages. It includes new features such as flexible box layout, grid layout, and animations that allow designers to create more sophisticated and engaging user interfaces.
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <TechScroll />
    </motion.div>
  );
};

export default Section;
