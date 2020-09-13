import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Content from "../../components/Content";
import DevSkillContainer from "../../components/DevSkillContainer";

import "./style.css";

function AboutPage(props) {
  return (
    <div className="mainContent">
      <Header title={props.title} />

      <Content>
        <p className="aboutMeText">
          I have a background in community and data operations, and I am
          passionate about creating user-friendly products and experiences.
        </p>
        <p className="aboutMeText">
          I am currently studying Full Stack Web Development at The University
          of Texas. I am excited to keep expanding my coding skills.
        </p>
        <p className="aboutMeText">
          Outside of class and work, I can be found getting overly excited about
          houseplants, meal prepping, brushing up on my foreign language skills,
          or enjoying a beautiful Austin day outdoors.
        </p>
        <p className="aboutMeText">
          Let me <Link to="./contact">help you</Link> build an amazing
          application!
        </p>
      </Content>

      <Header subTitle={props.subTitle} />

      <Content>
        <DevSkillContainer />
      </Content>
    </div>
  );
}

export default AboutPage;
