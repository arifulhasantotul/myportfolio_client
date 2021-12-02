import { Container } from "@mui/material";
// Animation
import { easeQuadInOut } from "d3-ease";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../AnimatedProgressProvider/AnimatedProgressProvider";
import { SkillsData } from "../Skills/SkillsData";
import "./About.css";

const About = () => {
   return (
      <Container className="about_page">
         <div className="heading">
            <h1>ME AND MY SKILLS</h1>
         </div>

         <div className="skill_wrapper">
            {SkillsData.map((skill, index) => (
               <div className="skill" key={index}>
                  <AnimatedProgressProvider
                     data-aos={skill.aos}
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
               </div>
            ))}
         </div>
      </Container>
   );
};

export default About;
