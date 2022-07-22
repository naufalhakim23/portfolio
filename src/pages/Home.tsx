import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { ScaleFade } from "@chakra-ui/react";
import BigCard from "../components/BigCard";
import Picture from "../components/Picture";
import TechUsed from "../components/TechUsed";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ScaleFade initialScale={0.8} in={true}>
        <Hero />
      </ScaleFade>
      <TechUsed />
      <ScaleFade initialScale={0.5} in={true}>
        <BigCard
          title={"IoT Garden with Deep Neural Network"}
          description={
            "A project to build a IoT garden with a deep neural network, using Tensorflow as Machine Learning Library, ESP32 as a microcontroller, and using Firebase Realtime Database as a simple database."
          }
          image={
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          buttonText={"Learn More"}
          buttonLink={undefined}
          buttonColor={undefined}
        />
      </ScaleFade>
      <Picture
        imagelink="./assets/images/portofolio_1_Page_1.png"
        alt="bangkit-2021"
      />
      <Picture
        imagelink="./assets/images/portofolio_1_Page_2.png"
        alt="iot-garden"
      />
    </div>
  );
};

export default Home;
