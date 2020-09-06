import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavPills from './components/NavPills';

// import './App.css';

function App() {
  return (
    <Router>
    <NavPills />

      <div>
        <h1>This is the Root Component </h1>
        {/* Using Switch to match only one route at a time. Negates the need for 'exact' keyword. */}
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
