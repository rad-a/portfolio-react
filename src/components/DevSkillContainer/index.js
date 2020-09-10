import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import skills from "../../Assets/DevSkillsData";
import DevSkillCard from "../DevSkillCard";
import "./style.css";

class DevSkillContainer extends React.Component {
  state = {
    skills,
  };

  render() {
    return (
      <Container>
        <Row className="skillsRow">
          {this.state.skills.map((skill) => (
            <DevSkillCard id={skill.id} key={skill.id} name={skill.name} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default DevSkillContainer;
