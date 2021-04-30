import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Enter from './Enter.js';
import Login from './Login.js';
import Signup from './Signup.js';
import axios from 'axios';
import './App.css';

function App() {
    return (
        <>
            <div className='app container-fluid bg-danger d-flex align-items-center justify-content-center'>
                <div className='row border border-3 border-dark rounded bg-secondary'>
                    <Router>
                        <Switch>
                            <Route path='/login'>
                                <Login />
                            </Route>
                            <Route path='/signup'>
                                <Signup />
                            </Route>
                            <Route path='/'>
                                <Enter />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default App;
