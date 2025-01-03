import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/home/Home";
import SignInForm from "./components/start/signin.js";
import NabBar from "./components/navBar/NabBar.js";
import SignUpForm from './components/start/signup.js';
import './App.css';
import PublicTemplatesPage from './components/public_tmp/public_tmp.js';
import PrivateTemplateForm from './components/private_temp/PrivateTemp.js';

function App() {
    return (
      <Router>
            <NabBar /> {/* Navbar appears on every page */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/public-templates" element={<PublicTemplatesPage />} />
                <Route path="/private-templates" element={<PrivateTemplateForm />} />
                {/* Add more routes as needed */}
            </Routes>
      </Router>
        
    );
}

export default App;
