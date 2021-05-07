import { Link } from 'react-router-dom';
import { useAuth } from './utilities/AuthContext.js';
import React, { useState } from 'react';

export default function Signup() {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(inputs);
    // setup form validation
    // setup error handling from axios call

    const { register } = useAuth();

    const handleSubmit = e => {
        const data = { username: inputs.username, email: inputs.email, password: inputs.password};
        register(data);
    }

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>Register</h1>
            </div>
            <div className='col-12'>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Username</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="" name="username" value={inputs.username || ''} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput5" className="form-label">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput5" placeholder="" name="email" value={inputs.email || ''} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput4" placeholder="" name="password" value={inputs.password || ''} onChange={handleChange}></input>
                </div>
                <div className="col-12 text-center mb-3">
                    <Link to='/' type="button" className="btn btn-dark">Cancel</Link>
                    { ' ' }
                    <button type="button" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}