import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiWebpack,
} from "react-icons/si";

type Props = {};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const LandingContent = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  return (
    <motion.div ref={ref} className="absolute z-20 flex flex-col items-center justify-center pt-10 text-center text-white bg-black bg-opacity-50 rounded-b-full "
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "exit"}
      exit="exit"
    >
      <motion.h2 className="mb-2 text-2xl font-bold" variants={childVariants}>Hi, I'm</motion.h2>
      <motion.h2 className="mb-2 text-4xl font-bold" variants={childVariants}>Wojtek</motion.h2>
      <motion.p className="mb-2" variants={childVariants}>
        As an ambitious and dedicated front-end developer, I seek to create
        intuitive and efficient user experiences.
      </motion.p>
      <motion.p className="px-20 mb-4" variants={childVariants}>
        With React, TypeScript, and Tailwind CSS, I'm
        capable of delivering high-quality work that satisfies both design and
        functionality goals.
      </motion.p>
      <motion.h3 className="mb-2 text-xl font-bold" variants={childVariants}>Technologies I Use</motion.h3>

      <motion.ul className="flex justify-center space-x-4" variants={childVariants}>
      <li>
          <SiHtml5 size={30} />
        </li>
        <li>
          <SiCss3 size={30} />
        </li>
        <li>
          <SiJavascript size={30} />
        </li>
        <li>
          <SiReact size={30} />
        </li>
        <li className="w-32"></li>
        <li>
          <SiTypescript size={30} />
        </li>
        <li>
          <SiTailwindcss size={30} />
        </li>
        <li>
          <SiGit size={30} />
        </li>
        <li>
          <SiWebpack size={30} />
        </li>
      </motion.ul>

      <motion.img
        src="/images/landing/me.jpg"
        alt="Your Name"
        className="w-48 h-48 mb-8 rounded-full"
        variants={childVariants}
      />

    </motion.div>
  );
};

export default LandingContent;
