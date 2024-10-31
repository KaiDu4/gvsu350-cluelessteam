import React, { useState } from "react"; // Make sure to import useState
import { Container, Form, Button } from "react-bootstrap";
import "./signin.css";
import { Link } from "react-router-dom";
const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Handle the sign-in logic here
        console.log('Sign In:', { email, password });
    };

    return (
        <div className="form">
            <h1>Login</h1>
            <div className='input-box'>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='input-box'>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleSignIn}>Sign In</button>

            <div className="register-link">
                <p>Don't have an account? <Link to="/signup">Open an account</Link></p>
            </div>
        </div>
    );
};

export default SignInForm;