import React from "react";
import { Box, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, Heading } from "@chakra-ui/react";
import { FaWindowClose } from "react-icons/fa";

const QualificationsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="blue">
        Check my qualifications
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md" mb="2">Experience:</Heading>
            <Text mb="4">
              I have 3 months of experience as a front-end developer, working
              with HTML, CSS, and JavaScript to create responsive websites.
            </Text>
            <Heading size="md" mb="2">Studies:</Heading>
            <Text>
              I hold a Bachelor's Degree in Engineering, which has given me a
              strong foundation in problem-solving, project management, and
              technical skills.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default QualificationsModal;
