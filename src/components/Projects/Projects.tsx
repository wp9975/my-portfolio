import React from "react";
import { Box, Image, Heading, Text, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const MotionBox = motion(Box);

const projectData = [
  {
    id: 1,
    title: "Projekt 1",
    description: "Opis projektu 1.",
    imageUrl: "/images/1.png",
  },
  {
    id: 2,
    title: "Projekt 2",
    description: "Opis projektu 2.",
    imageUrl: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Projekt 3",
    description: "Opis projektu 3.",
    imageUrl: "/images/3.jpg",
  },
  // Dodaj więcej projektów tutaj
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  
  const tileVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const showing = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div 
    ref={ref}
    initial={ "hidden" }
    animate={ inView ? "visible" : "hidden" }
    variants={showing}
    transition={{ duration: 1 }}
    className="py-10 ">
      <Heading as="h2" size="xl" color={"whiteAlpha.500"} textAlign="center" mb="6">
        Projekty
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
        px={{ base: "6", md: "16" }}
      >
        {projectData.map((project) => (
          <MotionBox
            key={project.id}
            initial="hidden"
            animate="visible"
            variants={tileVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            bg="white"
          >
            <Image src={project.imageUrl} alt={project.title} />
            <Box p="6">
              <Heading as="h3" size="md" mb="2">
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </Box>
          </MotionBox>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Projects;
