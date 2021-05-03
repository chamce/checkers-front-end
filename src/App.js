import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Welcome from './Welcome.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Dashboard from './Dashboard.js';
import NewGame from './NewGame.js';
import axios from 'axios';
import './App.css';

function App() {
    return (
        <>
            <div className='app container-fluid bg-danger d-flex align-items-center justify-content-center'>
                <div className='row border border-3 border-dark rounded bg-white'>
                    <Router>
                        <Switch>
                            <Route path='/login'>
                                <Login />
                            </Route>
                            <Route path='/signup'>
                                <Signup />
                            </Route>
                            <Route path='/dashboard'>
                                <Dashboard />
                            </Route>
                            <Route path='/newgame'>
                                <NewGame />
                            </Route>
                            <Route path='/'>
                                <Welcome />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default App;
