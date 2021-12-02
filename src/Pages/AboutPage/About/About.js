import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
// Animation
import { easeQuadInOut } from "d3-ease";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../AnimatedProgressProvider/AnimatedProgressProvider";
import { resumeData } from "../ResumeData/resumeData";
import { SkillsData } from "../Skills/SkillsData";
import "./About.css";

const About = () => {
   return (
      <Container className="about_page">
         <div className="heading">
            <h1>CODING SKILLS</h1>
         </div>

         <div
            className="skill_wrapper"
            data-aos="zoom-out"
            data-aos-duration="1000"
         >
            {SkillsData.map((skill, index) => (
               <div className="skill" key={index}>
                  <AnimatedProgressProvider
                     valueStart={0}
                     valueEnd={parseInt(skill.progressValue)}
                     duration={2}
                     easingFunction={easeQuadInOut}
                  >
                     {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                           <CircularProgressbar
                              value={value}
                              text={`${roundedValue}%`}
                              styles={buildStyles({
                                 pathTransition: "none",
                                 // Colors
                                 // pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                 pathColor: `${skill.circleColor}`,
                                 textColor: `#777`,
                                 trailColor: "#191919",
                              })}
                           />
                        );
                     }}
                  </AnimatedProgressProvider>
                  <p className="skill_name">{skill.skillName}</p>
               </div>
            ))}
         </div>
         <div className="heading">
            <h1>RESUME</h1>
         </div>
         <Box sx={{ flexGrow: 1, mx: "auto" }} className="resume">
            <Grid container>
               <Grid
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  item
                  xs={6}
                  className="resume_left"
               >
                  <h3>Education</h3>
                  <hr />
                  {resumeData.map((data, index) => (
                     <div key={index} className="education">
                        <h4>{data.year}</h4>
                        <h3>{data.course}</h3>
                        <h5>{data.institute}</h5>
                        <p>{data.details}</p>
                     </div>
                  ))}
               </Grid>
               <Grid
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  item
                  xs={6}
                  className="resume_right"
               >
                  <h3>Experience</h3>
                  <hr />
                  <div className="experience">
                     <p>
                        I've no experience, but I've some sites which I showed
                        in this portfolio
                     </p>
                  </div>
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default About;
