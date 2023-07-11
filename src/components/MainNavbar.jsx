import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from "react-router-dom";
import BtnToggleTheme from "./BtnToggleTheme";
import { Col, Row } from "react-bootstrap";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import Button from "react-bootstrap/Button";

function MainNavbar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span />
        <span />
        <span />
      </Navbar.Toggle>


      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "3px" }} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: "3px" }} /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/skill"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: "3px" }}
              />{" "}
              Skills
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: "3px" }}
              />{" "}
              Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      {!expand &&
        <Row style={{display:"flex", justifyContent: "space-around"}}>
          <Col className="col-sm-4">
            <BtnToggleTheme />
          </Col>

          <Col className="col-sm-4">
            <Button href="https://drive.google.com/file/d/10HNxzuJsJRcevjQ7_cG_JC3nGhHa9HTJ/view?usp=sharing" target="_blank">
              CV
            </Button>
          </Col>

        </Row>
      }

    </Navbar>
  );
}

export default MainNavbar;