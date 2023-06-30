import React from "react";
import { Box, Image, Heading, Text, Grid, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const MotionBox = motion(Box);

const projectData = [
  {
    id: 1,
    title: "Car Rental",
    description: "Car Rental web application",
    imageUrl: "/images/1.png",
    siteUrl: "https://bookkeeper-c2dba.web.app",
  },
  {
    id: 2,
    title: "Projekt 2",
    description: "Opis projektu 2.",
    imageUrl: "/images/2.jpg",
    siteUrl: "https://bookkeeper-c2dba.web.app",
  },
  {
    id: 3,
    title: "Bookkeeper",
    description: "Accounting application",
    imageUrl: "/images/3.jpg",
    siteUrl: "https://bookkeeper-c2dba.web.app",
  },
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
              <Flex
                justify={"space-between"}
              >
                <Box>
              <Heading as="h3" size="md" mb="2">
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
              </Box>
              <Box>
                <Link href={project.siteUrl} isExternal >
              <svg className="p-2 hover:bg-5 hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
</Link>
              </Box>
              </Flex>
            </Box>
          </MotionBox>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Projects;
