import { Flex, Grid, Box, Container } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import CardPoke from "../components/pokemon/CardPoke";
import HeroPoke from "../components/pokemon/HeroPoke";
import NavbarPoke from "../components/pokemon/NavbarPoke";
import QuickViewPoke from "../components/pokemon/QuickViewPoke";

const Pokemon = () => {
  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [urlDesc, setUrlDesc] = React.useState(null);
  const [isClicked, setIsClicked] = React.useState(false);
  const [numberIndex, setNumberIndex] = React.useState(0); //still not getting from click event
  //eslint-disable-next-line
  const fetchData = async (
    url = "https://pokeapi.co/api/v2/pokemon/1/"
  ) => {
    try {
      const res = await axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPost(res.data);
      setIsLoading(false);
      setUrlDesc(res.data.results[numberIndex].url);
    } catch (error) {
      setIsError(true);
    }
  };
  //eslint-disable-next-line
  useEffect(() => {
    //eslint-disable-next-line
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <NavbarPoke />
      <HeroPoke />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={20}
      >
        <h1>Pokemon</h1>
      </Flex>
      <Container
        zIndex={10}
      >

        {isClicked ? (
          <QuickViewPoke
            url={urlDesc}
          />
        ) : (
          <Grid
            templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            gap={4}
            mt={4}
            mb={4}
          >
          </Grid>
        )}
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Grid templateColumns="repeat(4, 1fr)"
          gap={4}
          mt={20}
          mb={20}
          p={4}
          borderWidth="1px"
          borderColor="gray.200"
          borderStyle="solid"
          borderRadius={4}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          overflow="hidden"
          transition="all 0.2s"
        >
          {isLoading ? (
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >Loading...</Box>
          ) : isError ? (
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >Error...</Box>
          ) : (
            post &&
            post.results?.map((item, index) => {
              return (
                <>
                  <Box
                    onClick={() => setIsClicked(!isClicked)}
                  >
                    <CardPoke
                      key={index}
                      name={item.name}
                      url={item.url}
                      id={index + 1}
                      onClick={() => {
                        setIsClicked(true);
                        setNumberIndex(index + 1);
                      }}
                    />
                  </Box>
                </>
              );
            })
          )
          }

        </Grid>
      </div
      >
    </div>
  );
};

export default Pokemon;
