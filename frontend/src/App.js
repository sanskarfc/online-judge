import React, { useState } from 'react';
import './App.css';  

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"; 

// components
import Doubts from "./pages/Doubts";  
import History from "./pages/History";
import Problem  from "./pages/Problem";
import Home from "./pages/Home";
import Submissions from "./pages/Submissions";
import Leaderboard from "./pages/Leaderboard";

function App() {
    return (
        <BrowserRouter>
            <main className="py-1">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/doubts" element={<Doubts/>} /> 
                    <Route path="/history" element={<History/>} /> 
                    <Route path="/problem" element={<Problem/>} /> 
                    <Route path="/submission" element={<Submissions/>} />
                    <Route path="/leaderboard" element={<Leaderboard/>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;

// to do: 
// choosing language changes the syntax hihglighting 
