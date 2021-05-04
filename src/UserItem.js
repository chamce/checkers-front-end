import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserItem(props) {
    return (
        <>
            <>
                <tr>
                    <td>{ props.user.name }</td>
                    { props.user.status ? <td className='text-success fw-bold'>Online</td> : <td className=''>Offline</td>}
                </tr>
            </>
        </>
    );
}