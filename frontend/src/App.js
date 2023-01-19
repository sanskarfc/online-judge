import React, { useState } from 'react';
import './App.css';
import History from "./pages/History";
import NavBar from "./pages/NavBar";
import Editor_component from "./pages/Editor";


export default function App() {
    return (
        <div className='App'>
            <NavBar />
            <Editor_component />
        </div>
    );
}



// to do: 
// make better frontend (give border to code editor)
// choosing language changes the syntax hihglighting 
// there should we a navbar with home, account and history (history should contain the points and code from all the previous runs)
// there should be a panel on botton of code editor which shows the results (instead of the server terminal)
