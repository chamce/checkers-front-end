import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Signup() {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    let history = useHistory();
    const handleSubmit = e => {
        let url = 'https://checkersbackend-whitakerchancellor489903.codeanyapp.com/api/signup';
        axios.post(url, inputs)
        .then(response => {
            console.log(response);
            window.localStorage.setItem('token', response.data.data.token);
            history.replace('/dashboard');
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    console.log(inputs);
    // setup form validation
    // setup error handling from axios call

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>Signup</h1>
            </div>
            <div className='col-12'>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Username</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="" name="username" value={inputs.username || ''} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput4" placeholder="" name="password" value={inputs.password || ''} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput5" className="form-label">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput5" placeholder="" name="email" value={inputs.email || ''} onChange={handleChange}></input>
                </div>
                <div className="col-12 text-center mb-3">
                    <Link to='/' type="button" className="btn btn-danger">Cancel</Link>
                    { ' ' }
                    <button type="button" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}