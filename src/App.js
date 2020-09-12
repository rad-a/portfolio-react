import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

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
        title: "HI, I'M RACHAEL",
        subTitle: "< Developer | Designer | Tea Enthusiast />",
        introText:
          "I am a web developer based in Austin, Texas. I enjoy coding and building efficient applications.",
        actionText: "More About Me",
      },
      about: {
        title: "ABOUT",
        subTitle: "MY SKILLS",
      },
      projects: {
        title: "PROJECTS",
      },
      contact: {
        title: "CONTACT",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="mainContainer p-0" fluid={true}>
          <TopNavbar />

          {/* Define routes and set state for each page. */}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  introText={this.state.home.introText}
                  actionText={this.state.home.actionText}
                />
              )}
            />
            <Route
              path="/about"
              render={() => (
                <AboutPage
                  title={this.state.about.title}
                  subTitle={this.state.about.subTitle}
                />
              )}
            />
            <Route
              path="/projects"
              render={() => <ProjectsPage title={this.state.projects.title} />}
            />
            <Route
              path="/contact"
              render={() => <ContactPage title={this.state.contact.title} />}
            />
          </Switch>
          {/* <Footer /> */}
        </Container>
      </Router>
    );
  }
}

export default App;
