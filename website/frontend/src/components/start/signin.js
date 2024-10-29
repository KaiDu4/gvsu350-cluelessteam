import React, { useState } from "react"; // Make sure to import useState
import { Container, Form, Button } from "react-bootstrap";

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Handle the sign-in logic here
        console.log('Sign In:', { email, password });
    };

    return (
        <div className="form">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignInForm;