import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.svg";
import Education from "./Education";
import Experience from "./Experience";

function About() {

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="green">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>


        <h1 className="project-heading" style={{paddingBottom: "20px"}}>
           <strong className="green">Education </strong>
        </h1>
        <Education/>


        <h1 className="project-heading" style={{paddingBottom: "20px"}}>
           <strong className="green">Experience</strong>
        </h1>
        <Experience/>


      </Container>
    </Container>
  );
}

export default About;