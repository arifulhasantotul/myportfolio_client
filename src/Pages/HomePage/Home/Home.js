import { Container } from "@mui/material";
import React from "react";
import HomeSection from "../HomeSection/HomeSection";
import "./Home.css";

const Home = () => {
   return (
      <Container className="homepage">
         <HomeSection />
      </Container>
   );
};

export default Home;
