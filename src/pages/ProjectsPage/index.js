import React from "react";

import ProjectContainer from "../../components/ProjectContainer/";
import Header from "../../components/Header";

function ProjectsPage(props) {
  return (
    <div className="mainContent">
      <Header title={props.title} />

      <ProjectContainer />
    </div>
  );
}

export default ProjectsPage;
