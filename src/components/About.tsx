import React, { useState } from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import QualificationsModal from "./subcomponents/QualificationsModal";

type Props = {};

const About = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const imageAnimation = {
    hidden: { x: -400, rotate: 0 },
    visible: { x: 0, rotate: 360 },
  };

  const textAnimation = {
    hidden: { x: -600 },
    visible: { x: 0 },
  };

  return (
    <section id="about" className="w-full ">
      <div
        ref={ref}
        className="relative flex flex-wrap items-center justify-center w-full px-4 py-16 text-white"
      >
        <motion.img
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageAnimation}
          transition={{ duration: 1 }}
          src="/png/laptop.png"
          alt="Profile"
          className="w-full border-2 border-white rounded-full shadow-lg md:w-1/3"
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textAnimation}
          transition={{ duration: 1 }}
          className="relative z-10 w-full mt-8 ml-8 md:w-1/3 md:mt-12"
        >
          <h2 className="mb-4 text-3xl font-semibold text-center md:text-4xl">
            About Me
          </h2>
          <p className="text-lg text-center md:text-xl">
            I am a Front End Developer with a passion for creating beautiful and
            functional web applications. With a strong background in HTML, CSS,
            and JavaScript, I enjoy developing responsive and user-friendly
            websites. My experience includes working with popular frameworks and
            libraries such as React and NextJS.
          </p>
          <div className="flex items-center justify-center w-full py-5">
            <QualificationsModal />
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 flex items-center justify-center w-full mt-8 md:mt-12"></div>
    </section>
  );
};

export default About;
