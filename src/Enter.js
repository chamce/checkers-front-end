import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Enter() {
    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-1'>Checkers</h1>
            </div>
            <div className='col-12 mb-3 text-center'>
                <Link to='/login' type="button" className="btn btn-dark btn-lg">Login</Link>
                { ' ' }
                <Link to='/signup' type="button" className="btn btn-dark btn-lg">Signup</Link>
            </div>
        </>
    )
}

export default Enter;