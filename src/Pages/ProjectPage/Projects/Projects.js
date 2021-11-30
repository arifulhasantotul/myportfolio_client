import { CircularProgress, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import IndividualProject from "../IndividualProject/IndividualProject";
import "./Projects.css";

const Projects = () => {
   const [projects, setProjects] = useState([]);
   const [projectLoading, setProjectLoading] = useState(true);

   useEffect(() => {
      setProjectLoading(true);
      const url = `https://arcane-reaches-94984.herokuapp.com/projects`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => setProjects(data))
         .catch((error) => console.log(error))
         .finally(() => setProjectLoading(false));
   }, []);
   return (
      <Container className="project_page">
         <div className="heading">
            <h1>PROJECTS</h1>
         </div>
         <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
               {!projectLoading &&
                  projects.map((project) => (
                     <IndividualProject key={project._id} project={project} />
                  ))}
               {projectLoading && (
                  <CircularProgress
                     color="warning"
                     style={{ margin: "0 auto" }}
                  />
               )}
            </Grid>
         </Box>
      </Container>
   );
};

export default Projects;
