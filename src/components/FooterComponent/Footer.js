import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
   return (
      <Container className="footer">
         <Box>
            <Grid container spacing={2}>
               <Grid
                  item
                  md={6}
                  style={{ display: "flex", alignItems: "center" }}
               >
                  <a
                     href="https://www.facebook.com/ariful.hasan.129794/"
                     target="_blank"
                     rel="noreferrer"
                     className="fb"
                  >
                     <FaIcons.FaFacebookF />
                  </a>
                  <a
                     href="https://twitter.com/Arifulh56003994"
                     target="_blank"
                     rel="noreferrer"
                     className="twt"
                  >
                     <FaIcons.FaTwitter />
                  </a>
                  <a
                     href="https://www.instagram.com/ahtotul/"
                     target="_blank"
                     rel="noreferrer"
                     className="inst"
                  >
                     <BsIcons.BsInstagram />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/md-ariful-hasan-716a31216/"
                     target="_blank"
                     rel="noreferrer"
                     className="in"
                  >
                     <FaIcons.FaLinkedinIn />
                  </a>
                  <a
                     href="https://github.com/arifulhasantotul"
                     target="_blank"
                     rel="noreferrer"
                     className="git"
                  >
                     <FaIcons.FaGithub />
                  </a>
               </Grid>
               <Grid item md={6}>
                  <Typography className="copyright">
                     {" "}
                     &copy; 2021 All rights reserved Md Ariful Hasan
                  </Typography>
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default Footer;
