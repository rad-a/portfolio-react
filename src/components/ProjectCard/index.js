import React from "react";
import Card from "react-bootstrap/Card";
// import projectData from "../../Assets/ProjectData";


function ProjectCard(props) {
  return (
    <Card>
      <Card.Header>
        <Card.Title> {props.name} </Card.Title>
      </Card.Header>
      <Card.Body>
        {/* <Card.Title> {props.name} </Card.Title> */}
        <Card.Image> {props.image} </Card.Image>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text> {props.description} </Card.Text>

        {/* <Card.Footer></Card.Footer> */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
