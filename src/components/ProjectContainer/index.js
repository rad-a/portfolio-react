import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import { Trail } from "react-spring/renderprops";

import projectData from "../../Assets/ProjectData";
import ProjectCard from "../ProjectCard";

class ProjectContainer extends Component {
  state = {
    projectData,
  };

  render() {
    return (
      <div>
        <CardColumns>
          <Trail
            items={projectData}
            keys={(project) => project.id}
            from={{ transform: "translate3d(-20px,0,0)" }}
            to={{ transform: "translate3d(0,0px,0)" }}
          >
            {(project) => (props) => (
              <div style={props}>
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  url={project.url}
                  repository={project.repository}
                  description={project.description}
                  role={project.role}
                />
              </div>
            )}
          </Trail>
        </CardColumns>
      </div>
    );
  }
}

export default ProjectContainer;
