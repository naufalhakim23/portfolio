import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <Flex>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
        _after={{
          bg: "brand.500",
          opacity: 0.25,
          pos: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          content: '" "',
        }}
      >
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{
            base: 4,
            lg: 20,
          }}
          py={24}
          backgroundImage="url(./assets/images/pose_25-p-800.png)"
          backgroundRepeat={["no-repeat", "no-repeat", "no-repeat"]}
          backgroundPosition={"top-left"}
          backgroundSize={"50%"}
        >
          <Heading
            fontSize={"5xl"}
            fontWeight="800"
            color="gray.800"
            textAlign="left"
            mb={4}
            verticalAlign={"center"}
          >
            My Name is <br />
            <span>NAUFAL AL-HAKIM</span>
          </Heading>
          <Text>
            I am a Data Scientist, Front-End Developer, Machine Learning
            Engineer, and a Full Stack Developer
          </Text>
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing={5}
            mt={4}
            justifyContent="center"
            alignItems="center"
            mb={4}
          >
            <Button
              variant="ghost"
              colorScheme="blue"
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/naufal-al-hakim/",
                  "_blank"
                );
              }}
            >
              <AiFillLinkedin size={20} /> LinkedIn
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              _hover={{
                bg: "black",
                color: "white",
              }}
              onClick={() => {
                window.open("https://www.github.com/naufalhakim23", "_blank");
              }}
            >
              <AiFillGithub size={20} /> Github
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1GcoqXihyiEypcwEoJQi7jX_03MSS--yg/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Download CV
            </Button>
          </SimpleGrid>
        </Flex>
        <Box w={"full"} bg={"white"}>
          <Center>
            <Box>
              <Image
                src="./assets/images/naufal-al-hakim.jpg"
                alt="naufal al-hakim"
                fit="cover"
                w="full"
                h={{
                  base: 64,
                  md: "full",
                }}
                bg="gray.100"
                loading="lazy"
              />
            </Box>
          </Center>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default Hero;
