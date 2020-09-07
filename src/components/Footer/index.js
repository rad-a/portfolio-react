import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import "./style.css";

function Footer() {
  return (
    <footer className="footer center mt-5 p-2">
      <Container class="footerContainer" fluid={true}>
        <Row className="p-3">
          <Col className="footerContent d-flex p-0">
            <h4>Find me on the web</h4>
            <Row className="socialIcons">
            {/* rel="noopener noreferrer" added to links with 'target="_blank"' to protect user against potential threats */}
              <a href="https://www.linkedin.com/in/rachaeladu" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="fa-2x m-2" />
              </a>
              <a href="https://github.com/rad-a" target="_blank" rel="noopener noreferrer">
                <FaGithub className="fa-2x m-2" />
              </a>
              <a href="https://twitter.com/arachael_" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare className="fa-2x m-2" />
              </a>
            </Row>
            <small>
              2020 &copy;{" "}
              <a href="https://rad-a.github.io/react_portfolio/">Rachael Adu</a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
