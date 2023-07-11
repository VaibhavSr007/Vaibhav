import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import lcimg from '../../assets/lc activity.png'
import Expertise  from "./Expertise";
import SkillsSlider from "./SkillsSlider/SkillsSlider";
import Certification from "./Certification";

function Skill() {

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

        {/* Expertise */}
        <h1 className="project-heading" style={{paddingBottom: "20px"}}>
         My <strong className="green">Expertise</strong>
        </h1>
        <Expertise/>

        {/* Skills */}
        <h1 className="project-heading">
           <strong className="green">Skills </strong> I'm equipped with
        </h1>
        <SkillsSlider/>

        {/* Leetcode */}
        <h1 className="project-heading">
           <strong className="green">Leetcode </strong> Activity
        </h1>
        <div className="lcimg-div" style={{display: "flex", justifyContent:"center", margin: "20px", marginBottom: "70px"}}>
           <img className="lcimg"  src={lcimg} alt="" />
        </div>

        {/* Github */}
        <Github />

        {/* Certificate */}
        <Certification/>

      </Container>
    </Container>
  );
}

export default Skill;