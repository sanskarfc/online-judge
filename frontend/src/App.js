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
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;

// to do: 
// choosing language changes the syntax hihglighting 
