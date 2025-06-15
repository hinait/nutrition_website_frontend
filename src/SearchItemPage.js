import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';
import config from './config';

const SearchItemPage = () => {
    const location = useLocation();
    const results = location.state?.results || [];
    const navigate = useNavigate();

    const getFoodById= async (foodId)=>{

        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.get(`${config.apiBaseUrl}/foods/${foodId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Food Nutrient Data:', response.data);
            navigate('/SearchResultsPage', { state: { foodDetails: response.data } });
        } catch (error) {
            console.error('Error fetching food by ID:', error);
        }
    }

    return (
        <>
            <HomePage />
<div className="page-wrapper">
            <div className="container">
                <h2>Search Results</h2>
                {results.length > 0 && (
                    <table>
                        <thead>
                        <tr>
                            <th>Food ID</th>
                            <th>Description</th>
                            <th>Publication Date</th>
                            <th>Food Code</th>
                            <th>Search Count</th>
                        </tr>
                        </thead>
                        <tbody>
                        {results.map((item) => (
                            <tr key={item.fdcId} className="search-result-item">
                                <td>
                                    <a href="#" onClick={() => getFoodById(item.fdcId)}>
                                        {item.fdcId}
                                    </a>
                                </td>
                                <td>{item.description}</td>
                                <td>{item.publicationDate}</td>
                                <td>{item.foodCode}</td>
                                <td>{item.search_count}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
</div>

        </>
    );
}

export default SearchItemPage;
