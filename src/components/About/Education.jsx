import React from "react";
import { Col, Row } from "react-bootstrap";


function Education() {
  return (
    <Row style={{ justifyContent: "space-evenly", paddingBottom: "70px" }}>
      <Col yl={6} xl={3} md={4} className="tech-icons" style={{justifyContent: "center"}}>
         <div><span className="green"> Matriculation :- </span> Shalom Residential Pubic school.</div>
         <div><span className="green"> Year :- </span> 2017 </div>
         <div><span className="green"> CGPA :- </span> 10/10 </div>
      </Col>

      <Col yl={6} xl={3} md={4} className="tech-icons">
           
          <div><span className="green"> Intermediate :- </span> Lucknow Public School. <br /></div>
          <div><span className="green"> Year :- </span> 2019 </div>
          <div><span className="green"> Percentage :- </span> 89 </div>
      </Col>

      <Col yl={6} xl={3} md={4} className="tech-icons">
          <div><span className="green">  Graduation :- </span> Vellore Institute of Technology. <br /> </div>
          <div><span className="green"> Year :- </span> 2020 - 2024  </div>
          <div><span className="green"> CGPA :- </span> 8.64/10 </div>
      </Col>
    </Row>
  );
}

export default Education;
