import { Container } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import HomeProjects from "../HomeProjects/HomeProjects";
import HomeSection from "../HomeSection/HomeSection";
import "./Home.css";

const Home = () => {
   return (
      <Container className="homepage">
         <Parallax pages={2} style={{ top: "0", left: "0" }}>
            <ParallaxLayer
               offset={0}
               speed={2.5}
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <HomeSection />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={2}>
               <HomeProjects />
            </ParallaxLayer>
         </Parallax>
      </Container>
   );
};

export default Home;
