import { Link } from 'react-router-dom';
import { useAuth } from './utilities/AuthContext.js';
import React, { useState } from 'react';

export default function Login() {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(inputs);

    const { login } = useAuth();

    const handleSubmit = e => {
        const data = { grant_type: "password", client_id: "2", client_secret: "pmTIhSab90Vrk0QbN7a1GsoEI5KcvcfNyrItuQSV", username: inputs.email, password: inputs.password, scope: "" };
        login(data);
    }

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>Login</h1>
            </div>
            <div className='col-12'>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" name="email" value={inputs.email || ''} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="" name="password" value={inputs.password || ''} onChange={handleChange}></input>
                </div>
            </div>
            <div className="col-12 text-center mb-3">
                <Link to='/' type="button" className="btn btn-danger">Cancel</Link>
                { ' ' }
                <button type="button" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}