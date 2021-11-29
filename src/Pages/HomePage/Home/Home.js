import { Container } from "@mui/material";
import React from "react";
import HomeSection from "../HomeSection/HomeSection";
import "./Home.css";

const Home = () => {
   return (
      <Container className="homepage" maxWidth="sm">
         <h2>This is homepage</h2>
         <HomeSection />
      </Container>
   );
};

export default Home;
