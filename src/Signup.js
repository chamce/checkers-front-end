import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Signup() {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        let url = 'https://checkersbackend-whitakerchancellor489903.codeanyapp.com/api/signup';
        axios.post(url, inputs)
        .then(response => {
            console.log(response);})
        .catch(error => {
            console.log(error);})
    }

    console.log(inputs);

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-1'>Signup</h1>
            </div>
            <div className='col-12'>
                <div class="mb-3">
                    <label for="formGroupExampleInput3" class="form-label">Username</label>
                    <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="" name="username" value={inputs.username || ''} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="formGroupExampleInput4" placeholder="" name="password" value={inputs.password || ''} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput5" class="form-label">Email</label>
                    <input type="email" class="form-control" id="formGroupExampleInput5" placeholder="" name="email" value={inputs.email || ''} onChange={handleChange}></input>
                </div>
                <div class="col-12 text-center mb-3">
                    <button type="button" class="btn btn-dark" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Signup;