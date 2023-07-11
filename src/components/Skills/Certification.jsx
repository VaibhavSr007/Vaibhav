import React from 'react'
import ProjectCard from '../Projects/ProjectCards'
import c1 from '../../assets/svg/certs/cl-pc.png'
import c2 from '../../assets/svg/certs/cl-es.png'
import { Col, Container, Row } from 'react-bootstrap'


const Certification = () => {

  return (
    <Container>
      <h1 className="project-heading">
        My <strong className="green">Certifications </strong>
      </h1>


      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={c1}
            title="AWS Certified Cloud Practitioner"
            link="https://drive.google.com/file/d/1GxcHtuZwDUy-edTLSxasSca_dpgEKCdc/view?usp=sharing"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={c2}
            title="AWS Cloud Essentials"
            link="https://drive.google.com/file/d/1FD2sYyChgeFxOdgvM81NjSSFA4YJSBXz/view?usp=sharing"
          />
        </Col>

      </Row>

    </Container>
  )
}
export default Certification;
