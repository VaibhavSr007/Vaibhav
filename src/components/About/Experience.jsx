import React from "react";
import { Col, Row } from "react-bootstrap";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "70px" }}>
      <Col xs={10} md={10} className="tech-icons" style={{justifyContent: "center"}}>
          <div style={{marginBottom: "12px"}}> <strong className="green"> F13 Technologies  </strong> (AWS Cloud Intern), Apr 2023</div>
          <div style={{marginBottom: "8px", fontSize: "1.1rem"}}> <strong className="green"> - </strong>  Worked on migration of web-based applications to AWS cloud using AWS EC2 and AWS S3, also optimized its performance.</div>
          <div style={{marginBottom: "8px", fontSize: "1.1rem"}}> <strong className="green"> - </strong> Build a Content Recommendation System (CRS) using AWS Personalize and S3. </div>
          <div style={{marginBottom: "8px", fontSize: "1.1rem"}}> <strong className="green"> - </strong> Architected an AWS solution for migration of the Indian Railways System to the AWS cloud.</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
