import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './signup.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        schoolDistrict: '',
        state: '',
        cellphone: '',
        email: '',
        password: ''
    });
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = async () => {
        // Check empty field registration try
        const isFormComplete = Object.values(formData).every(field => field.trim() !== '');
        
        if (!isFormComplete) {
            setMessage({ text: 'Please fill out all fields.', type: 'danger' });
            setShowMessage(true)
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            const data = await response.json();
        
            if (response.ok) {
              setMessage({ text: 'Registration successful!', type: 'success' });
            } else {
              setMessage({ text: data.error || 'Registration failed.', type: 'danger' });
            }
            setShowMessage(true);
          } catch (error) {
            console.error('Error:', error);
            setMessage({ text: 'An error occurred.', type: 'danger' });
            setShowMessage(true);
          }
        
        // Handle the sign-up logic here
        console.log('Sign Up:', formData);


        // Clear the form fields
        setFormData({
            firstName: '',
            lastName: '',
            schoolDistrict: '',
            state: '',
            cellphone: '',
            email: '',
            password: ''
        });
        // Hide the message after 3 seconds
        setTimeout(() => setShowMessage(true), 3000);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col md={12} lg={8} className="mx-auto shadow-lg p-4 rounded">
                    <h1 className="text-center mb-4">Sign Up</h1>
                    {showMessage && (
                        <Alert variant="success" className="text-center">
                            Registration successful!
                        </Alert>
                    )}
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formFirstName" className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formLastName" className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formSchoolDistrict" className="mb-3">
                            <Form.Label>School District</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter school district"
                                name="schoolDistrict"
                                value={formData.schoolDistrict}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formState" className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCellphone" className="mb-3">
                            <Form.Label>Cellphone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter cellphone number"
                                name="cellphone"
                                value={formData.cellphone}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Type your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="button"
                            onClick={handleSignUp}
                            className="w-100"
                        >
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpForm;