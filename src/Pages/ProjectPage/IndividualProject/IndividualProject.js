import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as VscIcons from "react-icons/vsc";

const IndividualProject = ({ project }) => {
   const { name, details, tag, category, dp_img } = project;
   return (
      <Grid item xs={12} sm={12} md={6} sx={{ px: 2, pb: 2 }}>
         <Box sx={{ flexGrow: 1 }} className="box_wrapper">
            <Grid container spacing={2} className="box">
               <Grid item xs={7}>
                  <img src={dp_img} alt="" />
                  <div className="tag">
                     {tag.map((data, index) => (
                        <p key={index}>{data}</p>
                     ))}
                  </div>
                  <div className="icon">
                     <button className="more">
                        <FiIcons.FiMoreVertical />
                     </button>
                     <button className="site">
                        <FaIcons.FaSlideshare />
                     </button>
                     <button className="client">
                        <VscIcons.VscGithubInverted />
                     </button>
                     {project.server_side && (
                        <button className="server">
                           <VscIcons.VscGithub />
                        </button>
                     )}
                  </div>
               </Grid>
               <Grid item xs={5} className="content">
                  <h3>{name}</h3>
                  <h4>{category}</h4>
                  <hr />
                  <ul className="tag">
                     {details.map((data, index) => (
                        <li key={index}>&#x21AA; {data}</li>
                     ))}
                  </ul>
               </Grid>
            </Grid>
         </Box>
      </Grid>
   );
};

export default IndividualProject;
