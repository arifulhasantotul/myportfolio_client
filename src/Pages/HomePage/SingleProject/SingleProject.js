import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as VscIcons from "react-icons/vsc";
import Tilt from "react-parallax-tilt";

const SingleProject = ({ project }) => {
   const { name, tag, category, dp_img } = project;
   return (
      <Grid xs={2} sm={4} md={4} sx={{ px: 2 }}>
         <Tilt>
            <Box sx={{ flexGrow: 1 }} className="card">
               <Grid container spacing={2}>
                  <Grid item xs={7}>
                     <img src={dp_img} alt="" />
                  </Grid>
                  <Grid item xs={5} className="content">
                     <h3>{name}</h3>
                     <h4>{category}</h4>
                     <div className="tag">
                        {tag.map((data, index) => (
                           <p key={index}>{data}</p>
                        ))}
                     </div>
                     <button className="more">
                        <FiIcons.FiMoreVertical />
                     </button>
                     <button className="site">
                        <FaIcons.FaSlideshare />
                     </button>
                     <button className="client">
                        <VscIcons.VscGithubInverted />
                     </button>
                     <button className="server">
                        <VscIcons.VscGithub />
                     </button>
                  </Grid>
               </Grid>
            </Box>
         </Tilt>
      </Grid>
   );
};

export default SingleProject;
