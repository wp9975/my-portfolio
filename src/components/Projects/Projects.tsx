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
    siteUrl: "https://wp9975.github.io/car-rental-frontend/",
    githubUrl: "https://github.com/wp9975/car-rental-frontend",
  },
  {
    id: 2,
    title: "Bookkeeper",
    description: "Accounting application",
    imageUrl: "/images/3.jpg",
    siteUrl: "https://bookkeeper-c2dba.web.app",
    githubUrl: "https://wp9975.github.io/",
  },
  {
    id: 3,
    title: "Lotogeneria",
    description: "Opis projektu 2.",
    imageUrl: "/images/2.jpg",
    siteUrl: "https://lotogeneria.vercel.app",
    githubUrl: "https://github.com/wp9975/lotogeneria",
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
             
                <Box>
              <Heading as="h3" size="md" mb="2">
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
              </Box>
              <Box>
              <Flex
              marginTop={5}
                justify={"space-around"}
              >
                <Link href={project.siteUrl} alignItems={"center"}   isExternal >
              <svg className="w-10 h-10 p-2 bg-blue-700 shadow-xl rounded-lg  hover:bg-5 hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
</Link>
<Link href={project.githubUrl} isExternal >
<svg className="w-10 h-10 p-2 bg-blue-700 shadow-xl rounded-lg  hover:bg-5 hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495 1 .108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.885-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
</svg>
</Link>
</Flex>
              </Box>
             
            </Box>
          </MotionBox>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Projects;
