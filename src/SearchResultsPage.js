import React from 'react';
import {useLocation} from 'react-router-dom';
import HomePage from './HomePage';

// test for commit
const SearchResultsPage = () => {
    const location = useLocation();
    const foodDetails = location.state?.foodDetails || [];
    console.log(foodDetails);

    return (
        <>
            <HomePage />
        <div className="container">
            <h1>Food Details</h1>
            {Object.keys(foodDetails).length > 0 ? (
                <div className="food-details">
                    <h2>{foodDetails.description}</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Food Code</th>
                            <th>FDC ID</th>
                            <th>Nutrient Name</th>
                            <th>Amount</th>

                        </tr>
                        </thead>
                        <tbody>
                        {foodDetails.foodNutrients && foodDetails.foodNutrients.length > 0 ? (
                            foodDetails.foodNutrients.map((nutrientItem, index) => (
                                <tr key={index} className="nutrient-item">
                                    <td>{foodDetails.foodCode}</td>
                                    <td>{foodDetails.fdcId}</td>
                                    <td>{nutrientItem.nutrient.name}</td>
                                    <td>{nutrientItem.amount} {nutrientItem.nutrient.unitName}</td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No nutrient information available.</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No food details found.</p>
            )}
        </div>
        </>
    );
};

export default SearchResultsPage;