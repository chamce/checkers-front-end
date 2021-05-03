import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameItem(props) {
    return (
        <>
            <>
                <tr>
                    { props.opponent.turn ? <td className='text-danger'>Their Turn</td> : <td className='text-success'>Your Turn</td>}
                    <td>{ props.opponent.name }</td>
                    { props.opponent.status ? <td className='text-success'>Online</td> : <td className='text-danger'>Offline</td>}
                </tr>
            </>
        </>
    );
}