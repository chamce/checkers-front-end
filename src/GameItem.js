import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameItem(props) {
    const [style, setStyle] = useState({ display: 'none'});

    return (
        <>
            <>
                <tr className='align-middle' style={ {height: '54.8px'} } onMouseEnter={e => setStyle({ display: 'block'})} onMouseLeave={e => setStyle({ display: 'none'})}>
                    { props.game.turn ? <td className='col-4 text-start text-success fw-bold'>Received</td> : <td className='col-4 text-start text-danger fw-bold'>Sent</td>}
                    <td className='col-4 text-center'>{ props.game.opponent }</td>
                    <td className='col-4 text-end'>
                        <div style={ style }>
                            { <Link type="button" className="btn btn-dark">Open</Link> }
                        </div>
                    </td>
                </tr>
            </>
        </>
    );
}