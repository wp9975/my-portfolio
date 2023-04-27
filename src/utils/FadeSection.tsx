import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  children: React.ReactNode;
}

const FadeInSection = ( props: Props ) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const scrollHandler = () => {
    const elementTop = window.innerHeight;
    const scrollY = window.scrollY;
    const offset = 150;

    if (scrollY + elementTop - offset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isVisible]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeInSection;
