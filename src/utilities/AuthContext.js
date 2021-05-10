import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './AxiosHelper';
import history from './history';

// code for user authentication
const AuthContext = createContext({});

// helper function that exports just the needed / wanted data for the provider
export const AuthHelper = () => {
    const [token, setToken] = useState('');
    const [users, setUsers] = useState([]);

    // retaining user login information
    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');
        if (lsToken) {
            setToken(lsToken)
        }
    }, [])

    useEffect(() => {
        if (token.length > 0) {
            axiosHelper({
                url: '/api/auth/user',
                successMethod: saveUserData,
                failureMethod: destroyToken,
                token
            })
        }
    }, [token])

    function saveUserData(res) {
        console.log("we got the user!", res.data)
        window.localStorage.setItem('me', JSON.stringify(res.data));
        getUsers();
        if (window.localStorage.getItem('conversation')) {
            history.replace('/session');
        } else {
            history.replace('/newgame');
        }
    }

    function saveToken(res) {
        let APItoken;
        if (res.config.url === "https://checkersbackend-whitakerchancellor489903.codeanyapp.com/api/auth/register") {
            APItoken = res.data.data.token;
        } else if (res.config.url === "https://checkersbackend-whitakerchancellor489903.codeanyapp.com/oauth/token") {
            APItoken = res.data.access_token;
        }
        setToken(APItoken);
        window.localStorage.setItem('token', APItoken);
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('users');
        window.localStorage.removeItem('me');
    }

    function register(registrationData) {
        axiosHelper({
            data: registrationData,
            method: 'post',
            url: '/api/auth/register',
            successMethod: saveToken
        })
    }

    function login(loginData) {
        axiosHelper({
            data: loginData,
            method: 'post',
            url: '/oauth/token',
            successMethod: saveToken
        })
    }

    function logout() {
        axiosHelper({
            url: '/api/auth/logout',
            successMethod: destroyToken,
            token
        })
    }  

    function getUsers() {
        axiosHelper({
            url: '/api/auth/allusers',
            successMethod: saveUsers,
            token
        })
    }

    function saveUsers(res) {
        console.log("we got the users!", res.data);
        setUsers(res.data);
        window.localStorage.setItem('users', JSON.stringify(res.data));
    }

    // sign up
    // log in
    // getting user information (such as the token, or the userdata)
    // log out

    return { token, register, login, logout, users, getUsers }
}

// custom Provider component
export const AuthProvider = (props) => {

    const initialContext = AuthHelper()

    return (
        <AuthContext.Provider value={initialContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

// create a custom hook
export const useAuth = () => useContext(AuthContext);

// actual context
export default AuthContext;