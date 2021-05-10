import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Message from './Message';
import { axiosHelper } from './utilities/AxiosHelper';
import { useAuth } from './utilities/AuthContext.js';
import history from './utilities/history.js';

export default function Session(props) {
    const { token } = useAuth();
    const [newMessage, setNewMessage] = useState('');
    const recipient = JSON.parse(window.localStorage.getItem('recipient'));
    const me = JSON.parse(window.localStorage.getItem('me'));
    const handleChange = e => {
        setNewMessage( prevState => e.target.value );
    }
    const deleteLS = () => {
        window.localStorage.removeItem('conversation');
        window.localStorage.removeItem('recipient');
    }
    useEffect(() => {
        props.setConversation(JSON.parse(window.localStorage.getItem('conversation')))
    }, [])
    const createMessage = () => {
        axiosHelper({
             method: 'post',
             url: '/api/auth/createmessage',
             data: {conversation: props.conversation.id, text: newMessage},
             successMethod: reloadConversation,
             token
         })
    }
    const reloadConversation = () => {
        axiosHelper({
             method: 'post',
             url: '/api/auth/createconvo',
             data: {them: recipient.id},
             successMethod: startSession,
             token
         })
    }
    const startSession = (res) => {
        props.setConversation(res.data);
        window.localStorage.setItem('conversation', JSON.stringify(res.data));
        setNewMessage('');
        history.replace('/session');
    }

    return (
        <>
            <>
                <div className='col-12 text-center'>
                    <h1 className='display-5'>{recipient.username}</h1>               
                </div>
                <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                    <table className="table border border-dark mb-0">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Messages</th>
                            </tr>
                        </thead>
                        <tbody>
                            { props.conversation.messages && props.conversation.messages.map((message, index) => <Message me={me} recipient={recipient} message={message} key={index}></Message>) }
                        </tbody>
                    </table>
                </div>
                <div className='col-12'>
                    <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="New Message" aria-label="New Message" aria-describedby="button-addon2" name="newMessage" value={newMessage || ''} onChange={handleChange}></input>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={createMessage}>Send</button>
                    </div>
                </div>
                <div className='col-12 text-center mb-3'>
                    <Link to='/newgame' type="button" className="btn btn-dark" onClick={deleteLS}>Back</Link>
                </div>
            </>
        </>
    );
}