import { Link, Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import React, { useState, useEffect } from 'react';
import Welcome from './Welcome.js';
import Login from './Login.js';
import Signup from './Signup.js';
import NewGame from './NewGame.js';
import axios from 'axios';
import './App.css';
import { AuthProvider } from './utilities/AuthContext.js'
import history from './utilities/history';
import Session from './Session.js';

export default function App() {
    const [conversation, setConversation] = useState({});
    const [recipient, setRecipient] = useState('');

    return (
        <>
            <div className='app container-fluid bg-danger d-flex align-items-center justify-content-center'>
                <div className='row border border-3 border-dark rounded bg-white justify-content-center' style={ {width: '450px'} }>
                    <AuthProvider>
                        <Router history={ history }>
                            <Switch>
                                <Route path='/login'>
                                    <Login />
                                </Route>
                                <Route path='/register'>
                                    <Signup />
                                </Route>
                                <Route path='/newgame'>
                                    <NewGame setConversation={setConversation} setRecipient={setRecipient} />
                                </Route>
                                <Route path='/session'>
                                    <Session conversation={conversation} recipient={recipient} />
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
