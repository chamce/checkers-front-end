import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignUp() {
  return (
    <>
      <div className='row text-center'>
        <div className='col'>
          <h1>Sign Up</h1>
          <h3>Enter a unique username and a strong password!</h3>
          <form className="row g-3 justify-content-center">
            <div className="col-md-2">
              <label for="signupUsername" className="form-label">Username</label>
              <input type="text" className="form-control" id="signupUsername"/>
            </div>
            <div className="col-md-2">
              <label for="signupPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="signupPassword"/>
            </div>
          </form>
          <Link to='/dashboard' type="button" className="btn btn-primary mt-3">Go</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;