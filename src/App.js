import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {AboutMe}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;