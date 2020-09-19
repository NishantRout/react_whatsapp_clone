import { Button } from '@material-ui/core';
import React from 'react';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../config/firebase';
import './css/Login.css';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => (
            console.log(result)
        )).catch(error => (
            alert(error.message)
        ))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn} >
                    <GoogleButton type="light" />
                </Button>
            </div>
        </div>
    )
}

export default Login;
