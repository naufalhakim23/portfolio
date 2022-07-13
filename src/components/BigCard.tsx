import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
const BigCard = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
  buttonColor,
}: any) => {
  return (
    <>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={20}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          shadow="xl"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          px={8}
          py={20}
          mx="auto"
        >
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 2,
            }}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box>
              <Heading
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                fontWeight="bold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="gray.900"
                _dark={{
                  color: "gray.400",
                }}
                lineHeight={{
                  md: "shorter",
                }}
              >
                {title}
              </Heading>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "lg",
                }}
              >
                {description}
              </chakra.p>
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                size="lg"
                bg="gray.900"
                _dark={{
                  bg: "gray.700",
                }}
                _hover={{
                  bg: "gray.700",
                  _dark: {
                    bg: "gray.600",
                  },
                }}
                color="gray.100"
                as="a"
              >
                {buttonText}
              </Button>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bgImage={`url(${image})`}
              _dark={{
                bg: "gray.700",
              }}
            ></Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default BigCard;
