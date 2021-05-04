import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameItem(props) {
    return (
        <>
            <>
                <tr>
                    { props.opponent.turn ? <td className=''>Their Move</td> : <td className='text-success fw-bold'>Your Move</td>}
                    <td>{ props.opponent.name }</td>
                    { props.opponent.status ? <td className='text-success fw-bold'>Online</td> : <td className=''>Offline</td>}
                </tr>
            </>
        </>
    );
}