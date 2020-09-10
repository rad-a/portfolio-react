import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

function Header(props) {
  return (
    <Jumbotron className="reducedHeight bg-transparent" fluid>
      <Container fluid={true}>
        <Row className="reducedHeight justify-content-center py-5">
          <Col md={8} xs={12}>
            {props.title && (
              <h1 className="font-weight-bolder display-4">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="font-weight-bolder">{props.subTitle}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Header;
