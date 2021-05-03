import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameItem from './GameItem';

export default function Dashboard() {
    let opponents = [
        {name: 'Allen', status: true, turn: false},
        {name: 'Bob', status: true, turn: false},
        {name: 'Chance', status: false, turn: false},
        {name: 'David', status: false, turn: false},
        {name: 'Ethan', status: true, turn: true},
        {name: 'Faith', status: true, turn: true},
        {name: 'Greg', status: false, turn: true},
        {name: 'Henry', status: false, turn: true}
    ];
    let me = {name: 'Ian'};
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(inputs);

    return (
        <>
            <table class="table">
                <thead>
                    <tr className='align-middle'>
                        <th scope="col-4" className=''><Link to='/newgame' type="button" className="btn btn-dark">New</Link></th>
                        <th scope="col-4" className='display-2 text-center'>Games</th>
                        <th scope="col-4" className='text-end'><Link to='/' type="button" className="btn btn-dark">Logout</Link></th>
                    </tr>
                </thead>
            </table>
            <div className='col-12'>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Opponent" aria-label="Opponent" aria-describedby="button-addon2" name="opponent" value={inputs.opponent || ''} onChange={handleChange}></input>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                <table className="table border border-dark mb-0 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Turn</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { opponents.map((opponent, index) => <GameItem opponent={opponent} me={me} key={index} index={index}></GameItem>) }
                    </tbody>
                </table>
            </div>
            <div className='col-12 mb-3 text-center'>
                <Link type="button" className="btn btn-dark">Launch</Link>
            </div>
        </>
    );
}