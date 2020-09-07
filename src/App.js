import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import About from './pages/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Rachael Adu",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Hi, I'm Rachael",
        subtitle: "Developer, Designer, and Tea Enthusiast.",
        introText: "I am a web developer based in Austin, Texas.",
      },
      about: {
        title: "About",
        subtitle: "My Skills",
      },
      projects: {
        title: "My Projects",
      },
      contact: {
        title: "Contact",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <TopNavbar />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
