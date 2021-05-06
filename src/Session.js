import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Session() {
    let board = Array(64).fill(0);

    return (
        <>
            <>
                <div className='col-12 text-center'>
                    <h1 className='display-2'>Session</h1>               
                </div>
            </>
        </>
    );
}