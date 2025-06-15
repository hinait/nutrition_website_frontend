import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import config from './config';


const AccountPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAccountInfo = async () => {
            const token = localStorage.getItem('accessToken');

            try {
                const response = await axios.get(`${config.apiBaseUrl}/users/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                console.log('Account info:', response.data);
                setName(response.data.displayName);
                setEmail(response.data.email);
            } catch (error) {
                console.error('Failed to fetch account info:', error);
                setError('Failed to load account information');
            }
        };

        fetchAccountInfo();
    }, []);

    return (
        <div className="auth-container">
            <h2>Account Profile</h2>

            <form id="Accountform">
                <label htmlFor="name">Name:</label>
                <span id="username" className="input-style">{name}</span>

                <label htmlFor="email">Email:</label>
                <span id="useremail" className="input-style">{email}</span>
            </form>
            <div className="auth-links">
            <Link to="/">Back to Home</Link><br></br>
                <Link to="/historyPage">Browser history</Link><br></br>
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
}

export default AccountPage;