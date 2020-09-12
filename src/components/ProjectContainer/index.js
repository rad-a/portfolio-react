import React, { Component } from "react";
// import Row from "react-bootstrap/Row";
import CardColumns from "react-bootstrap/CardColumns";
// import Container from "react-bootstrap/Container";

import projectData from "../../Assets/ProjectData";
import ProjectCard from "../ProjectCard";


class ProjectContainer extends Component {
  state = {
    projectData,
  };

  render() {
    return (
      // <Container>
      <CardColumns>
        {this.state.projectData.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            // url={project.url}
            // repository={project.repository}
            description={project.description}
            // role={project.role}
          />
        ))}
      </CardColumns>
      // </Container>
    );
  }
}

export default ProjectContainer;
