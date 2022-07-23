import { Flex, Grid, Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import CardPoke from "../components/pokemon/CardPoke";
import HeroPoke from "../components/pokemon/HeroPoke";
import NavbarPoke from "../components/pokemon/NavbarPoke";

const Pokemon = () => {
  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const fetchData = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPost(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(post);
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
        {/* {JSON.stringify(post)} */}
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)">
        {isLoading ? (
          <Box>Loading...</Box>
        ) : isError ? (
          <Box>Error...</Box>
        ) : (
          post &&
          post.results?.map((item, index) => {
            return (
              <Box>
                <CardPoke
                  key={index}
                  name={item.name}
                  url={item.url}
                  id={index + 1}
                />
              </Box>
            );
          })
        )
        }
      </Grid>
    </div>
  );
};

export default Pokemon;
