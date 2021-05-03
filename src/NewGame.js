import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

export default function NewGame() {
    let users = [
        {name: 'Allen', status: true},
        {name: 'Bob', status: true},
        {name: 'Chance', status: true},
        {name: 'David', status: true},
        {name: 'Ethan', status: false},
        {name: 'Faith', status: false},
        {name: 'Greg', status: false},
        {name: 'Henry', status: false}
    ];
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(inputs);

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>New Game</h1>
            </div>
            <div className='col-12'>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="button-addon2" name="username" value={inputs.username || ''} onChange={handleChange}></input>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                <table className="table border border-dark mb-0 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user, index) => <UserItem user={user} key={index} index={index}></UserItem>) }
                    </tbody>
                </table>
            </div>
            <div className='col-12 text-center mb-3'>
                <Link to='/dashboard' type="button" className="btn btn-danger">Cancel</Link>
                { ' ' }
                <Link type="button" className="btn btn-dark">Create Game</Link>
            </div>
        </>
    );
}