import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Welcome() {
  return (
    <>
      <div className='row text-center'>
        <div className='col'>
          <h1>Welcome</h1>
          <h3>Want to play checkers?</h3>
          <div className="d-grid gap-2 col-1 mx-auto mt-3">
            <Link to='/login' className="btn btn-primary fs-5" type="button">Log In</Link>
            <Link to='/signup' className="btn btn-primary fs-5" type="button">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;