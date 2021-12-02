import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as VscIcons from "react-icons/vsc";
import CustomModal from "../../../shared/CustomModal/CustomModal";
// ..
AOS.init();

const IndividualProject = ({ project }) => {
   const [modalShow, setModalShow] = useState(false);
   const openModal = () => setModalShow(true);
   const closeModal = () => setModalShow(false);
   const { name, aos, details, tag, category, dp_img, live_link, client_side } =
      project;
   return (
      <>
         <Grid
            data-aos={aos}
            data-aos-once="true"
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ pl: 1, pr: 4, pb: 2 }}
         >
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
                        <button onClick={openModal} className="more">
                           <FiIcons.FiMoreVertical />
                        </button>
                        <a
                           href={live_link}
                           target="_blank"
                           rel="noreferrer"
                           className="site"
                        >
                           <FaIcons.FaSlideshare />
                        </a>
                        <a
                           href={client_side}
                           target="_blank"
                           rel="noreferrer"
                           className="client"
                        >
                           <VscIcons.VscGithubInverted />
                        </a>
                        {project.server_side && (
                           <a
                              href={project?.server_side}
                              target="_blank"
                              rel="noreferrer"
                              className="server"
                           >
                              <VscIcons.VscGithub />
                           </a>
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
            <CustomModal
               modalShow={modalShow}
               setModalShow={setModalShow}
               closeModal={closeModal}
               project={project}
            />
         </Grid>
      </>
   );
};

export default IndividualProject;
