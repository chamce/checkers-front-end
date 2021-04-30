import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    console.log(inputs);

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-1'>Login</h1>
            </div>
            <div className='col-12'>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Username</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" name="username" value={inputs.username || ''} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" name="password" value={inputs.password || ''} onChange={handleChange}></input>
                </div>
            </div>
            <div class="col-12 text-center mb-3">
                <button type="button" class="btn btn-dark">Submit</button>
            </div>
        </>
    )
}

export default Login;