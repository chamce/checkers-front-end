import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameItem(props) {
    const [style, setStyle] = useState({ display: 'none'});

    return (
        <>
            <>
                <tr className='align-middle' style={ {height: '54.8px'} } onMouseEnter={e => setStyle({ display: 'block'})} onMouseLeave={e => setStyle({ display: 'none'})}>
                    <td className='col-4 text-start'>{ props.game.opponent }</td>
                </tr>
            </>
        </>
    );
}