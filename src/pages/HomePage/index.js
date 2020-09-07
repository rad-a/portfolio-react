import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsCaretDownFill } from "react-icons/bs";

import "./style.css";

function HomePage(props) {
  return (
    <Container className="profileContainer p-0" fluid={true}>
      <Row className="profileContent" noGutters={true}>
        <Col id="profileText">
          {props.title && <h1>{props.title}</h1>}
          {props.subTitle && <h3>{props.subTitle}</h3>}
          {props.introText && <h5>{props.introText}</h5>}
          {props.actionText && (
            <Button variant="outline-success">
              <strong>{props.actionText}</strong>
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
