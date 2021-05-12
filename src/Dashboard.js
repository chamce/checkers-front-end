import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameItem from './GameItem';
import { useAuth } from './utilities/AuthContext.js';

export default function Dashboard() {
    const { logout } = useAuth();
    let me = {name: 'Ian'};
    let games = [
        {opponent: 'Allen', turn: true, moves: 0},
        {opponent: 'Bob', turn: true, moves: 7},
        {opponent: 'Chance', turn: true, moves: 2},
        {opponent: 'David', turn: true, moves: 12},
        {opponent: 'Ethan', turn: false, moves: 4},
        {opponent: 'Faith', turn: false, moves: 4},
        {opponent: 'Greg', turn: false, moves: 2},
        {opponent: 'Henry', turn: false, moves: 20}
    ];
    const [username, setUsername] = useState('');
    const [list, setList] = useState(games);
    const handleChange = e => {
        setUsername( prevState => e.target.value );
    }
    const filterUsernames = () => {
        console.log(username)
        let temp = list.filter(game => game.opponent.toLowerCase().includes(username.toLowerCase()));
        if (username === '') {
            setList(games);
        } else {
            setList(temp);
        }
    }
    useEffect(filterUsernames, [username]);

    return (
        <>
            <table class="table">
                <thead>
                    <tr className='align-middle'>
                        <th scope="col-4" className=''><Link to='/newgame' type="button" className="btn btn-dark">New</Link></th>
                        <th scope="col-4" className='display-2 text-center'>Convos</th>
                        <th scope="col-4" className='text-end'><Link to='/' type="button" className="btn btn-dark" onClick={ logout }>Logout</Link></th>
                    </tr>
                </thead>
            </table>
            <div className='col-12'>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient" aria-label="Recipient" aria-describedby="button-addon2" name="username" value={username || ''} onChange={handleChange}></input>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                <table className="table border border-dark mb-0 table-hover">
                    <thead>
                        <tr className='align-middle'>
                            <th scope="col">Last</th>
                            <th scope="col" className='text-center'>Recipient</th>
                            <th scope="col" className='text-end'></th>
                        </tr>
                    </thead>
                    <tbody>
                        { list.map((game, index) => <GameItem game={game} me={me} key={index} index={index}></GameItem>) }
                    </tbody>
                </table>
            </div>
            <div className='col-12 text-center mb-3'>
                <button type="button" className="btn btn-dark">Refresh</button>
            </div>
        </>
    );
}