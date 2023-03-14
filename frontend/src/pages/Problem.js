import React from 'react';
import ReactMarkdown from 'react-markdown';
import Navnav from "../components/Navbar";

export default function Problem() {
    {/* need to have the problem statement in markdown here */} 
    return (    
        <div> 
            <Navnav />
            <ReactMarkdown>***This has been written in react-markdown***</ReactMarkdown>
            <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
        </div>
    )
}
