import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import note from "../assets/note.png";

const Homepage = () => {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={10} textAlign={"center"} size={"3xl"}>
        Note
      </Heading>
      <Text maxW={"50%"} mt={8} textAlign={'justify'}>
        Introducing a cutting-edge note application that seamlessly combines
        innovation and functionality to elevate your note-taking experience. Our
        app boasts an intuitive interface, providing users with a clean and
        efficient platform for capturing and organizing thoughts. With
        cross-platform synchronization, your notes effortlessly travel with you
        across devices, ensuring accessibility wherever you go. Experience the
        freedom of expression with rich formatting options that allow you to
        customize your notes, making them as vibrant and dynamic as your ideas.
        The voice-to-text integration feature adds a new dimension to
        convenience, enabling hands-free note creation for busy individuals on
        the move. Collaboration is at the heart of our application, offering
        real-time co-editing for teams and groups. Foster creativity and enhance
        productivity as ideas flow seamlessly between collaborators. Security
        and privacy are paramount, with options for password protection and
        biometric authentication, ensuring that your confidential information
        remains secure. Whether you're a student, professional, or creative
        individual, our note application is designed to be your go-to tool.
        Capture, organize, and share ideas effortlessly, and watch as
        productivity becomes a natural extension of your daily routine. Embrace
        the future of note-taking with our feature-rich application, a versatile
        companion for every aspect of your life.
      </Text>
    </Box>
  );
};

export default Homepage;
