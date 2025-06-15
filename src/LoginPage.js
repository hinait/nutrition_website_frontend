import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from './config';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(`${config.apiBaseUrl}/login`, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);
            localStorage.setItem('accessToken', response.data.accessToken);

            navigate('/')
            console.log('Login successful!');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid email or password');

        }
    }
        return (
            <div className="auth-container">
                    <h2>Log In</h2>
                <form id="loginForm" onSubmit={handleLogin}>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
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
                    <Link to="/register">Register</Link><br></br>
                    <button id="loginBtn" type="submit">Submit</button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
                </div>

        );
}

export default LoginPage;