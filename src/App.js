import { Link, Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import React, { useState, useEffect } from 'react';
import Welcome from './Welcome.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Dashboard from './Dashboard.js';
import NewGame from './NewGame.js';
import axios from 'axios';
import './App.css';
import { AuthProvider } from './utilities/AuthContext.js'
import history from './utilities/history';

export default function App() {
    return (
        <>
            <div className='app container-fluid bg-danger d-flex align-items-center justify-content-center'>
                <div className='row border border-3 border-dark rounded bg-white justify-content-center'>
                    <AuthProvider>
                        <Router history={ history }>
                            <Switch>
                                <Route path='/login'>
                                    <Login />
                                </Route>
                                <Route path='/register'>
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
                    </AuthProvider> 
                </div>
            </div>
        </>
    );
}
