import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import owner from "../../../images/owner.jpg";
import "./HomeSection.css";

const TEXTS = ["Student", "Web Developer", "Web Design", "Learner"];

const HomeSection = () => {
   const [index, setIndex] = useState(0);

   React.useEffect(() => {
      const intervalId = setInterval(
         () => setIndex((index) => index + 1),
         3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
   }, []);
   return (
      <Container>
         <Box className="homeSec">
            <Grid container spacing={2} className="grid_layer">
               <Grid item xs={12} md={5} className="img_grid">
                  <img src={owner} alt="portfolio_pic" />
               </Grid>
               <Grid item xs={12} md={7} className="content_grid">
                  <Typography className="text_transition" component="div">
                     <TextTransition
                        text={TEXTS[index % TEXTS.length]}
                        springConfig={presets.wobbly}
                     />
                  </Typography>
                  <Typography className="text_name" component="div">
                     MD ARIFUL HASAN
                  </Typography>
                  <Typography className="text_details">
                     Peace be upon you. I’m a self-motivated, innovative,
                     task-driven web designer and developer with a passion for
                     web designing and development. I always try to keep my work
                     simple, clean and effective for other developers and users.
                  </Typography>
                  <div>
                     <button className="btn">Download Resume</button>
                     <button className="btn">Contact</button>
                  </div>
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default HomeSection;
