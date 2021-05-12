import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Message from './Message';
import { axiosHelper } from './utilities/AxiosHelper';
import { useAuth } from './utilities/AuthContext.js';
import history from './utilities/history.js';
import Pusher from 'react-pusher';

export default function Session() {
    const { token } = useAuth();
    const [newMessage, setNewMessage] = useState('');
    const handleChange = e => {
        setNewMessage( prevState => e.target.value );
    }
    const recipient = JSON.parse(window.localStorage.getItem('recipient'));
    const me = JSON.parse(window.localStorage.getItem('me'));
    const deleteLS = () => {
        window.localStorage.removeItem('conversation');
        window.localStorage.removeItem('recipient');
    }
    useEffect(() => {
        var div = document.getElementById('chat-list');
        div.scrollTop = div.scrollHeight;
    }, [])
    const createMessage = () => {
        axiosHelper({
            method: 'post',
            url: '/api/auth/createmessage',
            data: {conversation: JSON.parse(window.localStorage.getItem('conversation')).id, text: newMessage},
            successMethod: reloadConversation,
            token
        })
    }
    const reloadConversation = (e) => {
        // if conversation id of the session (from conversation in LS) is the same as the conversation id from the pusher notification
        if (e.convoID === JSON.parse(window.localStorage.getItem('conversation')).id) {
            console.log(e)
            console.log('hello')
            axiosHelper({
                method: 'post',
                url: '/api/auth/createconvo',
                data: {them: recipient.id},
                successMethod: startSession,
                token
            })
        }
        
    }
    const startSession = (res) => {
        window.localStorage.setItem('conversation', JSON.stringify(res.data));
        let messages = res.data.messages;
        if (me.id === messages[messages.length - 1].sender_id) {
            setNewMessage('');
        }
        //history.replace('/session');
        var div = document.getElementById('chat-list');
        div.scrollTop = div.scrollHeight;
    }

    return (
        <>
            <>
                <Pusher
                    channel="my-channel"
                    event="my-event"
                    onUpdate={ reloadConversation }
                />
                <div className='col-12 text-center'>
                    <h1 className='display-5'>{recipient.username}</h1>               
                </div>
                <div id='chat-list' className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                    <table className="table table-borderless mb-0 bg-secondary">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Messages</th>
                            </tr>
                        </thead>
                        <tbody>
                            { JSON.parse(window.localStorage.getItem('conversation')).messages && JSON.parse(window.localStorage.getItem('conversation')).messages.map((message, index) => <Message me={me} recipient={recipient} message={message} key={index}></Message>) }
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