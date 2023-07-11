import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import p1 from  '../../assets/projects/1.png'
import p2 from '../../assets/projects/2.png'
import p3 from '../../assets/projects/3.png'
import p4 from '../../assets/projects/4.png'
import p5 from '../../assets/projects/5.png'
import p61 from '../../assets/projects/61.png'


function Projects() {
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p className="text">Here are a few projects I've worked on Recently.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              title="Defence Dreamers"
              description="A comprehensive platform for individuals preparing for defence exams and SSB interviews. The website offers a wide range of features, including an exam preparation guide, SSB interview preparation material, success stories and strategies from successful candidates, a contact form for sending doubts to the experts and a chatbot extension for clearing doubts."
              link="https://github.com/VaibhavSr007/Defence-Dreamers.github.io"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="VITB Grievance Portal"
              description="A College Grievance Portal for students of VIT Bhopal, to register their complaints, send anonymous suggestions and get notified through an email alert system. Separate faculties portal side to respond to complaints with remarks or change the complaints' status. Additional features like 2 Factor Authentication and secure JWT-based authentication are also included.
              "
              link="https://github.com/VaibhavSr007/VITB-Grievance-Portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="AV Enterprises"
              description="AV Enterprises is a full-Stack E-commerce website that aims to bring my father's enterprise business online and provide a platform for customers to browse, book, and buy products from the portal. The website also includes a comprehensive admin panel for managing products, orders, users, and sales statistics by the business owner accompanied by secure JWT authentication.."
              link="https://github.com/VaibhavSr007/AV-Enterprises.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="Dreamers Chat"
              description="This project aims to create a platform where defence aspirants can come together, chat, clear doubts, and provide guidance to each other in building a successful career in defence services. Real-time communication, allowing multiple users to join and chat simultaneously, alerting users about new arrivals and exits and listing all present users are notable features."
              link="https://github.com/VaibhavSr007/DD-Chat.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p61}
              isBlog={false}
              title="Happy Paws"
              description="Happy Paws is a front-end project build to provide a beautiful UI interface for a pet store. The website has a fully responsive user interface with attractive design components, Technologies used in making this project include HTML, CSS JavaScript and components of Bootstrap. The website is hosted from two platforms, first from S3 on AWS other is on GitHub Pages."
              link="https://github.com/VaibhavSr007/Happy-Paws.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title= "WanderWise"
              description="WanderWise is a Travel Companion website designed to assist travellers in planning their trips with insights and accuracy. It provides users with information about their desired destinations, including famous hotels, restaurants and tourist attractions. Additionally, it can sort options based on ratings and access real-time weather data of the destination."
              link="https://github.com/VaibhavSr007/WanderWise.github.io"
            />
          </Col>   

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
