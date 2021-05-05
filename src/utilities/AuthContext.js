import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './AxiosHelper';
import history from './history';
// code for user authentication

const AuthContext = createContext({});


// helper function that exports just the needed / wanted data for the provider
export const AuthHelper = () => {

    const [token, setToken] = useState('')
    const [users, setUsers] = useState([])

    // retaining user login information
    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

        if (lsToken) {
            axiosHelper({
                url: '/api/auth/user',
                successMethod: saveUserData,
                failureMethod: destroyToken,
                token: lsToken
            })

            setToken(lsToken)
        }
    }, [token])

    function saveUserData(res) {
        console.log("we got the user!", res.data)
        history.replace('/dashboard')
        getUsers()
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
        //history.replace('/dashboard');
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
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
            successMethod: saveUsers
        })
    }

    function saveUsers(res) {
        let users = res.data.map((user) => user);
        setUsers(users);
    }

    // sign up
    // log in
    // getting user information (such as the token, or the userdata)
    // log out

    return { token, register, login, logout, getUsers, users }

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