import React, { useState } from 'react';
import history from './utilities/history';
import { useAuth } from './utilities/AuthContext.js';
import { axiosHelper } from './utilities/AxiosHelper';

export default function UserItem(props) {
    const [style, setStyle] = useState({ display: 'none'});
    const { token, users } = useAuth();
    
    const getConversation = () => {
        let recipient = users.filter(user => user.username === props.user.username)[0];
        // console.log(recipient);
        axiosHelper({
             method: 'post',
             url: '/api/auth/createconvo',
             data: {them: recipient.id},
             successMethod: startSession,
             token
         })
    }

    const startSession = (res) => {
        props.setRecipient(props.user.username);
        props.setConversation(res.data);
        history.push('/session');
    }

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
                                    { <button onClick={ getConversation } /*onClick={ startSession }*/ className="btn btn-dark">Chat</button> }
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </>
        </>
    );
}