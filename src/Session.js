import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Session(props) {
    const [message, setMessage] = useState('');
    const handleChange = e => {
        setMessage( prevState => e.target.value );
    }
    console.log(props.conversation);

    return (
        <>
            <>
                <div className='col-12 text-center'>
                    <h1 className='display-5'>{props.recipient}</h1>               
                </div>
                <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                    <table className="table border border-dark mb-0 table-hover">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Chat Log</th>
                            </tr>
                        </thead>
                        <tbody>
                            { }
                        </tbody>
                    </table>
                </div>
                <div className='col-12'>
                    <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Message" aria-label="Message" aria-describedby="button-addon2" name="message" value={message || ''} onChange={handleChange}></input>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                    </div>
                </div>
                <div className='col-12 text-center mb-3'>
                    <Link to='/newgame' type="button" className="btn btn-dark">Back</Link>
                </div>
            </>
        </>
    );
}