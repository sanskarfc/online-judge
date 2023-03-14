import React, { useState } from 'react';
import Editor_component from './Editor';
import Navnav from "../components/Navbar";

export default function Home() {
    return (
        <div className="App">
            <Navnav />
            <Editor_component />
        </div>
    )
}
