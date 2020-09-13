import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
            <Link to="./about">
              <Button variant="outline-success">
                <strong>{props.actionText}</strong>
              </Button>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
