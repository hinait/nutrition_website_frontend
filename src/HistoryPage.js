import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';
import {Link} from "react-router-dom";

const HistoryPage = () => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        const fetchHistoryData = async () => {
            const token = localStorage.getItem('accessToken');

            try {
                const response = await axios.get(`${config.apiBaseUrl}/users/foods/history`,{

                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },

                });
                console.log('Fetched History Data:', response.data);
                setHistoryData(response.data);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        };
        fetchHistoryData();
    }, []);

    return (
        <div className="container">
            <h1>Search History</h1>
            {historyData && historyData.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Search Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {historyData.map((item, index) => (
                        <tr key={index} className="history-item">
                            <td>{item.description}</td>
                            <td>{item.search_count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No history available.</p>
            )}
            <div className="auth-links">

                <Link to="/">Back to Home</Link><br></br>
                <Link to="/account">Back to Account</Link><br></br>
            </div>
        </div>
    );
};

export default HistoryPage;