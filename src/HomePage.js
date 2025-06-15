import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import config from './config';

const HomePage  = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setIsLoggedIn(true);

        } else {
            setIsLoggedIn(false);
        }
    }, []);


    const handleLogout= async (event) => {

        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        navigate("/")
        console.log('logout successful!');

    }
    const handleSubmit= async (event) => {

        event.preventDefault();

        const token = localStorage.getItem('accessToken');
        try {
            const response = await axios.get(`${config.apiBaseUrl}/foods`, {
                params: { name: searchTerm },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('for Search item results:', response.data);
            navigate('/SearchItemPage', { state: { results: response.data } });

        } catch (error) {
            console.error('Search error:', error);
            setError('Search failed. Please try again.');
        }
    }

    return (
        <div className="page-wrapper">
        <div className="container">
            <div className="auth-links">
                {isLoggedIn ? (
                    <>
                        <a href="/account">Account</a>
                        <p onClick={handleLogout}>Logout</p>
                    </>
                ) : (
                    <>
                    <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </>
                )}
            </div>
            <h1>Search for Organic Products</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter search term..."
                    required
                />
                <button type="submit">Search</button>
            </form>
            {error && <p className="error">{error}</p>}
            {children}
        </div>
        </div>
    );

};


export default HomePage;
