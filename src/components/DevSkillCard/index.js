import React from "react";
import Image from "react-bootstrap/Image";
import "./style.css";

function DevSkillCard(props) {
  return (
    <Image src={props.name} noGutters={true} className="skillIcon p-2 my-3" />
  );
}

export default DevSkillCard;
