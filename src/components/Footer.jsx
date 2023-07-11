import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import {
  SiLeetcode,
} from "react-icons/si";

import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"/>

        <Col md="4" className="footer-copyright">
          <h3>Copyright ©  {year}  Vaibhav Srivastava</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://github.com/vaibhavsr007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.linkedin.com/in/vaibhavsr007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="mailto:vaibhav.srivastava2020@vitbhopal.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://leetcode.com/VaibhavSr007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode/>
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-body"/>
        
      </Row>
    </Container>
  );
}

export default Footer;