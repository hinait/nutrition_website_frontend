import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import SearchResultsPage from './SearchResultsPage';
import './App.css';
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import AccountPage from "./AccountPage";
import SearchItemPage from "./SearchItemPage";
import HistoryPage from "./HistoryPage";
import background from "./assets/background.png";

// test for commit

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/SearchResultsPage" element={<SearchResultsPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/account" element={<AccountPage/>}/>
                    <Route path="/SearchItemPage" element={<SearchItemPage/>}/>
                    <Route path="/historyPage" element={<HistoryPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App
