import React from "react";

import ProjectContainer from "../../components/ProjectContainer/";
import Header from "../../components/Header";
import Content from "../../components/Content";

function ProjectsPage(props) {
  return (
    <div className="mainContent">
      <Header title={props.title} />
      <Content>
        <ProjectContainer />
      </Content>
    </div>
  );
}

export default ProjectsPage;
