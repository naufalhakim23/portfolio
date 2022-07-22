import React from "react";
import {
  Box,
  Flex,
  chakra,
  Button,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  CloseButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a href="/" display="flex" alignItems="center">
              <Image
                src="./assets/images/Artboard 4.png"
                alt="portofolio-logo"
                width="50px"
                mr={2}
              />
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Naufal Al-Hakim
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={10}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/">
                <Button variant="link" colorScheme="black">
                  Home
                </Button>
              </Link>
              <Button variant="link" colorScheme="black">
                Background
              </Button>
              <Link to="/pokemon">
                <Button variant="link" colorScheme="black">
                  Pokemon List
                </Button>
              </Link>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Home
                </Button>
                <Button w="full" variant="ghost">
                  Background
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
