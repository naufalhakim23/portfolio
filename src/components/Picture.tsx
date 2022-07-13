import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Picture = ({ imagelink, alt }: any) => {
  return (
    <div>
      <Flex bg="black" w="full" justifyContent="center" alignItems="center">
        <Image src={imagelink} alt={alt} fit="cover" />
      </Flex>
    </div>
  );
};

export default Picture;
