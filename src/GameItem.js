import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameItem(props) {
    return (
        <>
            <>
                <tr className='align-middle'>
                    { props.game.turn ? <td className='col-2 text-start text-success fw-bold'><Link to='/session'>Go</Link></td> : <td className='col-2 text-start text-danger'>Wait</td>}
                    <td className='col-8 text-center'>{ props.game.opponent }</td>
                    <td className='col-2 text-end'>{ props.game.moves }</td>
                </tr>
            </>
        </>
    );
}