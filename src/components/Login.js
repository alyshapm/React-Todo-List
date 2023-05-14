import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithGoogle, logInWithEmailAndPassword } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/Login.css";
import { Title } from './Title';
import { useCookies } from 'react-cookie';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

    // const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate();

    // useEffect(() => {
    // if (loading) {
    //     // maybe trigger a loading screen
    //     return;
    // }
    // if (user) navigate("/todo");
    // }, [user, loading]);

    const handle = () => {
        setCookie('Email', email, { path: '/' });
        setCookie('Password', password, { path: '/' });
     };

    return (
    <div className="login">
        <div className="login__container">
        <Title />
        <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
        />
        <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />

        {/* <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}>
            Login
        </button> */}
        <button className="login__btn" onClick={handle}>
            Login
        </button>{' '}

        {/* <button className="login__btn login__google" onClick={signInWithGoogle}>
            Login with Google
        </button> */}
        <button className="login__btn login__google" >
            Login with Google
        </button>

        <div>
            <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
            Don't have an account? <Link to="/register">Register</Link> now.
        </div>

        {cookies.Email && (
            <div>
            Email: <p>{cookies.Email}</p>
            </div>
        )}
        {cookies.Password && (
            <div>
            Password: <p>{cookies.Password}</p>
            </div>
        )}
        </div>
    </div>
    );
}