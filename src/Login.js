import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login() {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(inputs);

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>Login</h1>
            </div>
            <div className='col-12'>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" name="username" value={inputs.username || ''} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="" name="password" value={inputs.password || ''} onChange={handleChange}></input>
                </div>
            </div>
            <div className="col-12 text-center mb-3">
                <Link to='/' type="button" className="btn btn-danger">Cancel</Link>
                { ' ' }
                <button type="button" className="btn btn-dark">Submit</button>
            </div>
        </>
    );
}