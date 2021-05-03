import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-1'>Games</h1>
            </div>
            <div className='col-12'>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Opponent" aria-label="Opponent" aria-describedby="button-addon2"></input>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                <table className="table border border-dark mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Opponent</th>
                            <th scope="col">Status</th>
                            <th scope="col">Turn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Allen</td>
                            <td className='text-success'>Online</td>
                            <td>Yours</td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td className='text-success'>Online</td>
                            <td>Yours</td>
                        </tr>
                        <tr>
                            <td>Chance</td>
                            <td className='text-success'>Online</td>
                            <td>Theirs</td>
                        </tr>
                        <tr>
                            <td>David</td>
                            <td className='text-danger'>Online</td>
                            <td>Theirs</td>
                        </tr>
                        <tr>
                            <td>Ethan</td>
                            <td className='text-danger'>Offline</td>
                            <td>Theirs</td>
                        </tr>
                        <tr>
                            <td>Faith</td>
                            <td className='text-danger'>Offline</td>
                            <td>Theirs</td>
                        </tr>
                        <tr>
                            <td>Greg</td>
                            <td className='text-danger'>Offline</td>
                            <td>Theirs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-12 mb-3 text-center'>
                <Link type="button" className="btn btn-dark btn-lg">Launch</Link>
            </div>
            <div className='col-12 mb-3 text-center'>
                <Link to='/newgame' type="button" className="btn btn-dark btn-lg">New Game</Link>
            </div>
        </>
    );
}