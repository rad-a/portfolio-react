import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

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
        subTitle: "Developer, Designer, and Tea Enthusiast.",
        introText: "I am a web developer based in Austin, Texas.",
      },
      about: {
        title: "About",
        subTitle: "My Skills",
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
          {/* <Switch>
            <Route component={AboutPage} path="/about" />
            <Route component={ProjectsPage} path="/projects" />
            <Route component={ContactPage} path="/contact" /> */}

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
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
