import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameItem(props) {
    const [style, setStyle] = useState({ display: 'none'});

    return (
        <>
            <>
                <tr className='align-middle' onMouseEnter={e => setStyle({ display: 'block'})} onMouseLeave={e => setStyle({ display: 'none'})}>
                    { props.game.turn ? <td className='col-2 text-start text-success fw-bold'>Go</td> : <td className='col-2 text-start text-danger'>Wait</td>}
                    <td className='col-8 text-center'>{ props.game.opponent }</td>
                    <td className='col-2 text-end'>{ props.game.moves }</td>
                </tr>
            </>
        </>
    );
}