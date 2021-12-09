import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import Axios from "axios";
// import fileDownload from "js-file-download";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import owner from "../../../images/owner.jpg";
import "./HomeSection.css";

const TEXTS = ["Student", "Web Developer", "Web Designer", "MERN Learner"];

const HomeSection = () => {
   const [index, setIndex] = useState(0);
   const navigate = useNavigate();

   const goToContact = () => navigate("/contact");

   useEffect(() => {
      const intervalId = setInterval(
         () => setIndex((index) => index + 1),
         3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
   }, []);

   // const downloadFile = (e) => {
   //    // const url = "http://localhost:8080";
   //    // const url = "https://calm-sea-78267.herokuapp.com/";
   //    const url = `https://drive.google.com/file/d/1vRX5Ke51_rONMasYE3z1vhn-TndH4whv/view?usp=sharing`;
   //    Axios.get(url, {
   //       responseType: "blob",
   //    }).then((res) => {
   //       fileDownload(res.data, "ariful_resume.pdf");
   //    });
   // };

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
                     {/* <button onClick={(e) => downloadFile(e)} className="btn">
                        Download Resume
                     </button> */}
                     <a
                        href="https://drive.google.com/file/d/1Pg8dhSXDekdQrtytCR5LlrHT8fhp5fHV/view?usp=sharing"
                        target="_blank"
                        className="btn"
                        rel="noreferrer"
                     >
                        Download Resume
                     </a>
                     <button onClick={goToContact} className="btn">
                        Contact
                     </button>
                  </div>
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default HomeSection;
