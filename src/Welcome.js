import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Welcome() {
    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>Checkers</h1>
            </div>
            <div className='col-12 mb-3 text-center'>
                <Link to='/login' type="button" className="btn btn-dark">Login</Link>
                { ' ' }
                <Link to='/register' type="button" className="btn btn-dark">Register</Link>
            </div>
        </>
    );
}