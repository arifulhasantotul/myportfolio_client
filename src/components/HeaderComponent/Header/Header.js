import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import * as VSIcons from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.jpg";
import "./Header.css";

const Header = () => {
   const [openMenu, setOpenMenu] = useState(false);

   const toggleMenu = () => {
      setOpenMenu(!openMenu);
   };

   return (
      <Container className="header">
         <Box>
            <Grid container spacing={2}>
               <Grid item md={6}>
                  {openMenu && (
                     <span id="menu_bar" onClick={toggleMenu}>
                        {" "}
                        <VSIcons.VscClearAll />{" "}
                     </span>
                  )}
                  {!openMenu && (
                     <span id="menu_bar" onClick={toggleMenu}>
                        {" "}
                        <VSIcons.VscChecklist />{" "}
                     </span>
                  )}
                  <img src={logo} alt="" />
                  <Link to="/" className="logo">
                     <span> ARIFUL </span>HASAN
                  </Link>
               </Grid>
               {/* nav start   */}
               <Grid
                  item
                  md={6}
                  className={openMenu ? "navbar open" : "navbar"}
               >
                  <Link to="/home">Home</Link>
                  <Link to="/book">Book</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact</Link>
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default Header;
