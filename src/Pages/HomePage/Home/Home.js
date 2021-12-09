import { Container } from "@mui/material";
import React from "react";
import ReviewSec from "../../../components/ReviewSec/ReviewSec";
import HomeProjects from "../HomeProjects/HomeProjects";
import HomeSection from "../HomeSection/HomeSection";
import "./Home.css";

const Home = () => {
   return (
      <Container className="homepage">
         <HomeSection />
         <HomeProjects />
         <ReviewSec />
      </Container>
   );
};

export default Home;
