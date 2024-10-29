import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/home/Home";
import SignInForm from "./components/start/signin.js";
import NabBar from "./components/navBar/NabBar.js";
import './App.css';

function App() {
    return (
      <Router>
            <NabBar /> {/* Navbar appears on every page */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInForm />} />
                {/* Add more routes as needed */}
            </Routes>
      </Router>
        
    );
}

export default App;
