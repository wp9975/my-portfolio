import React from "react";
import { Heading, Grid, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Car Rental",
    description: "Car Rental web application",
    stack:"#React #JavaScript  #Tailwind  #MaterialUI  #Vite ",
    imageUrl: "/images/1.png",
    siteUrl: "https://wp9975.github.io/car-rental-frontend/",
    githubUrl: "https://github.com/wp9975/car-rental-frontend",
  },
  {
    id: 2,
    title: "Bookkeeper",
    description: "Accounting application",
    stack:"#react  #JavaScript  #Firebase  #Tailwind  #MaterialUI  #Vite",
    imageUrl: "/images/3.jpg",
    siteUrl: "https://bookkeeper-c2dba.web.app",
    githubUrl: "https://wp9975.github.io/",
  },
  {
    id: 3,
    title: "Lotogeneria",
    description: "Lottery numbers generator",
    stack:"#React  #JavaScript  #Tailwind  #MaterialUI  #Vite",
    imageUrl: "/images/2.jpg",
    siteUrl: "https://lotogeneria.vercel.app",
    githubUrl: "https://github.com/wp9975/lotogeneria",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const showing = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      id="projects"
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={showing}
      transition={{ duration: 1 }}
      className="w-full py-10 "
    >
      
      <Heading
        as="h2"
        size="xl"
        color={"whiteAlpha.500"}
        textAlign="center"
        mb="6"
      >
        Projekty
      </Heading>
      
      <Grid
        maxW={2040}
        marginX={"auto"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
        gap={6}
        px={{ base: "6", md: "16" }}
      >
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Grid>
      
    </motion.div>
  );
};

export default Projects;
