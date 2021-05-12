import { Link } from 'react-router-dom';
import React from 'react';

export default function Welcome() {
    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>Chat Now</h1>
            </div>
            <div className='col-12 mb-3 text-center'>
                <Link to='/login' type="button" className="btn btn-dark">Login</Link>
                { ' ' }
                <Link to='/register' type="button" className="btn btn-dark">Register</Link>
            </div>
        </>
    );
}