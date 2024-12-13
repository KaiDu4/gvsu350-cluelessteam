import React, { useState } from "react"; // Make sure to import useState
import { Container, Form, Button } from "react-bootstrap";
import "./signin.css";
import { Link } from "react-router-dom";
const SignInForm = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    });
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSignIn = async() => {
        // Handle the sign-in logic here
        // check empty field
        const isFormData = Object.values(formData).every(field => field.trim() != '');
        if(!isFormData) {
            setMessage({text: 'Please fill out the fields', type: 'danger'});
            setShowMessage(true);
            return;
        }
        console.log(formData.email);
        try {
            const response = await fetch('http://localhost:5000/auth/signin', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            const data = await response.json();
        
            if (response.ok) {
              setMessage({ text: 'Signin successful!', type: 'success' });
            } else {
              setMessage({ text: data.error || 'Signin failed.', type: 'danger' });
            }
            setShowMessage(true);
          } catch (error) {
            console.error('Error:', error);
            setMessage({ text: 'An error occurred.', type: 'danger' });
            setShowMessage(true);
          }

        // Hide the message after 3 seconds
        setTimeout(() => setShowMessage(true), 3000);
    }

    return (
        <div className="form">
            <h1>Login</h1>
            <div className='input-box'>
                <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className='input-box'>
                <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>
            <button type="button" onClick={handleSignIn}>Sign In</button>

            <div className="register-link">
                <p>Don't have an account? <Link to="/signup">Open an account</Link></p>
            </div>
        </div>
    );
};

export default SignInForm;