import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('creatturAccessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Creattur ${accessToken}`;
    } else {
        localStorage.removeItem('creatturAccessToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

function checkLogin() {
    const accessToken = window.localStorage.getItem('creatturAccessToken');
    return accessToken ? true : false;
}

function isLoginStatus() {
    if(localStorage.getItem("userAddress") != 'null' && localStorage.getItem("userAddress") != null){
        return true;
    }else{
        return false;
    }
}


export default function AuthProvider(props) {
    const [isLogin, setIsLogin] = useState(checkLogin());
    const [userData] = useState({});

    let data = {
        userLoggedIn: isLogin,
        userData,
        isLogin: isLoginStatus,
        userLogIn: (type, data) => {
            setSession(data);
            setIsLogin(type);
        },
    }


    return (
        <AuthContext.Provider value={data}>
            {props.children}
        </AuthContext.Provider>
    )
}