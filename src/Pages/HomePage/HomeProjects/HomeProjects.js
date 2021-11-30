import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleProject from "../SingleProject/SingleProject";
import "./HomeProjects.css";

const HomeProjects = () => {
   const [projects, setProjects] = useState([]);
   const [projectLoading, setProjectLoading] = useState(true);

   useEffect(() => {
      setProjectLoading(true);
      const url = `http://localhost:8080/projects?size=3`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => setProjects(data))
         .catch((error) => console.log(error))
         .finally(() => setProjectLoading(false));
   }, []);

   return (
      <>
         <div className="heading">
            <h1>DEMO PROJECTS</h1>
         </div>
         <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
               {!projectLoading &&
                  projects.map((project) => (
                     <SingleProject key={project._id} project={project} />
                  ))}
               {projectLoading && <CircularProgress />}
            </Grid>
         </Box>
      </>
   );
};

export default HomeProjects;
