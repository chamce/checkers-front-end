import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard.js';
import Welcome from './Welcome.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <>
      <div className='container-fluid bg-secondary'>
        <Router>
          <Switch>
            <Route path='/login'>
              <LogIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/'>
              <Welcome />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
