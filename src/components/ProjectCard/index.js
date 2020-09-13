import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./style.css";

const MooCard = (props) => {
  return (
    <Card className="projectItem mb-4">
      <Card.Body>
        <Card.Img src={props.image} className=" mb-3" />
        <Card.Title>
          {" "}
          <h4 className="font-weight-bolder pt-1">{props.name}</h4>{" "}
        </Card.Title>
        <Card.Text className="border-top pt-3"> {props.description} </Card.Text>
        <Button variant="secondary" href={props.repository} target="_blank">
          {" "}
          Github
        </Button>{" "}
        <Button variant="secondary" href={props.url} target="_blank">
          {" "}
          App
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MooCard;
