import React, { useState } from 'react';
import history from './utilities/history';
import { useAuth } from './utilities/AuthContext.js';
import { axiosHelper } from './utilities/AxiosHelper';

export default function UserItem(props) {
    const [style, setStyle] = useState({ display: 'none'});
    const { token } = useAuth();
    
    const getConversation = () => {
        window.localStorage.setItem('recipient', JSON.stringify(props.recipient));
        window.localStorage.setItem('me', JSON.stringify(props.me));
        axiosHelper({
             method: 'post',
             url: '/api/auth/createconvo',
             data: {them: props.recipient.id},
             successMethod: startSession,
             token
         })
    }

    const startSession = (res) => {
        props.setConversation(res.data);
        window.localStorage.setItem('conversation', JSON.stringify(res.data));
        history.push('/session');
    }

    return (
        <>
            <>
                <tr className='align-middle' style={ {height: '54.8px'} } onMouseEnter={e => setStyle({ display: 'block'})} onMouseLeave={e => setStyle({ display: 'none'})}>
                    <td>
                        <div className='row d-flex align-items-center'>
                            <div className='col-4'></div>
                            <div className='col-4 d-flex justify-content-center'>{ props.recipient.username }</div>
                            <div className='col-4 text-end'>
                                <div style={ style }>
                                    { <button onClick={ getConversation } className="btn btn-dark">Chat</button> }
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </>
        </>
    );
}