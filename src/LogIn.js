import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LogIn() {
  return (
    <>
      <div className='row text-center'>
        <div className='col'>
          <h1>Log In</h1>
          <h3>Enter your credentials!</h3>
          <form className="row g-3 justify-content-center">
            <div className="col-md-2">
              <label for="loginUsername" className="form-label">Username</label>
              <input type="text" className="form-control" id="loginUsername"/>
            </div>
            <div className="col-md-2">
              <label for="loginPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="loginPassword"/>
            </div>
          </form>
          <Link to='/dashboard' type="button" className="btn btn-primary mt-3">Go</Link>
        </div>
      </div>
    </>
  );
}

export default LogIn;