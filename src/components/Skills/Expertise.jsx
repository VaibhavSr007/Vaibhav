import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
} from "react-icons/di";
import {
    SiAmazonaws,
    SiLeetcode,
    SiReact,
} from "react-icons/si";



function Expertise() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
            {head:"Problem Solving" , icon: <SiLeetcode />},   
            {head:"Front-end Dev" , icon: <SiReact />},
            {head:"Back-end Dev" , icon: <DiNodejs />},
            {head:"Cloud Architect" , icon: <SiAmazonaws/>},
            
        ].map((tool,i) => 
          <Col md={4} key={i} xl={2} className="ex-icons">
            <div style={{fontSize:"1.5rem"}}>{tool.head}</div>
            {tool.icon}
          </Col>)
      }
    </Row>
  );
}

export default Expertise;