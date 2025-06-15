import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import config from './config';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {

        event.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match', 'error')

            return;
        }
        const newUser = {
            email: email,
            password: password,
            displayName: name,
        }

        axios.post(`${config.apiBaseUrl}/register`, newUser, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('accessToken', response.data.accessToken);

                navigate('/')
            })
            .catch((error) => {
                console.error('Registration failed:', error);
                setError('Registration failed. Please try again.');
            });
    }

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form id="registration_form" onSubmit={handleRegister}>
                <label htmlFor="name">Name:</label>
                <input
                    type="name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="confirm password"
                    required
                />
                <div className="auth-links">
                    <Link to="/">Back to Home</Link><br></br>
                </div>
                    <button id="loginBtn" type="submit">Submit</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
);
}


export default RegisterPage;