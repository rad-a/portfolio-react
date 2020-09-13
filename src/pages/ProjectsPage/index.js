import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectContainer from "../../components/ProjectContainer/";
import Header from "../../components/Header";

function ProjectsPage(props) {
  return (
    <div className="mainContent">
      <Header title={props.title} />
      <Row className="justify-content-center py-5">
        <Col lg={8} md={10} xs={12}>
          <ProjectContainer />
        </Col>
      </Row>
    </div>
  );
}

export default ProjectsPage;
