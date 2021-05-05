import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserItem(props) {
    const [style, setStyle] = useState({ display: 'none'});

    return (
        <>
            <>
                <tr className='align-middle' style={ {height: '54.8px'} } onMouseEnter={e => setStyle({ display: 'block'})} onMouseLeave={e => setStyle({ display: 'none'})}>
                    <td>
                        <div className='row d-flex align-items-center'>
                            <div className='col-4'></div>
                            <div className='col-4 d-flex justify-content-center'>{ props.user.username }</div>
                            <div className='col-4 text-end'>
                                <div style={ style }>
                                    { <Link type="button" className="btn btn-dark">Create</Link> }
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </>
        </>
    );
}