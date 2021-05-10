import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import { useAuth } from './utilities/AuthContext.js';
import history from './utilities/history.js';

export default function NewGame(props) {
    const { users, getUsers } = useAuth();
    const [list, setList] = useState([]);
    const [username, setUsername] = useState('');
    const { logout } = useAuth();
    const me = JSON.parse(window.localStorage.getItem('me'));
    const handleChange = e => {
        setUsername( prevState => e.target.value );
    }
    const filterUsernames = () => {
        console.log(username)
        let temp = list.filter(user => user.username.toLowerCase().includes(username.toLowerCase()));
        if (username === '') {
            setList(users);
        } else {
            setList(temp);
        }
    }
    useEffect(() => {setList(prevList => users)}, [users]);
    useEffect(filterUsernames, [username]);
    const reloadUsers = () => {
        getUsers()
        history.replace('/newgame')
    }

    return (
        <>
            <div className='col-12 text-center'>
                <h1 className='display-2'>Conversations</h1>
            </div>
            <div className='col-12'>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="button-addon2" name="username" value={username || ''} onChange={handleChange}></input>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className='col-12 overflow-auto mb-3' style={{ height: '245.6px' }}>
                <table className="table border border-dark mb-0 table-hover">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Recipient</th>
                        </tr>
                    </thead>
                    <tbody>
                        { list && list.map((recipient, index) => <UserItem setConversation={props.setConversation} me={me} recipient={recipient} key={index} index={index}></UserItem>) }
                    </tbody>
                </table>
            </div>
            <div className='col-12 text-center mb-3'>
                <Link to='/' type="button" className="btn btn-danger" onClick={ logout }>Logout</Link>
                { ' ' }
                <button type="button" className="btn btn-dark" onClick={ reloadUsers }>Refresh</button>
            </div>
        </>
    );
}