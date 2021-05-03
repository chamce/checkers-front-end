import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewGame() {
    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-1'>New Game</h1>
            </div>
            <div className='col-12'>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="button-addon2"></input>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                <table className="table border border-dark mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Allen</td>
                            <td className='text-success'>Online</td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td className='text-success'>Online</td>
                        </tr>
                        <tr>
                            <td>Chance</td>
                            <td className='text-success'>Online</td>
                        </tr>
                        <tr>
                            <td>David</td>
                            <td className='text-danger'>Offline</td>
                        </tr>
                        <tr>
                            <td>Ethan</td>
                            <td className='text-danger'>Offline</td>
                        </tr>
                        <tr>
                            <td>Faith</td>
                            <td className='text-danger'>Offline</td>
                        </tr>
                        <tr>
                            <td>Greg</td>
                            <td className='text-danger'>Offline</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-12 text-center mb-3'>
                <Link to='/dashboard' type="button" className="btn btn-dark btn-lg">Create Game</Link>
            </div>
        </>
    );
}