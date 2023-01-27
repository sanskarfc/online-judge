import React from 'react';
import ReactMarkdown from 'react-markdown';

console.log("HHHH");

export default function Problem() {
    {/* need to have the problem statement in markdown here */} 
    return (    
        <div>
            <ReactMarkdown>***This has been written in react-markdown***</ReactMarkdown>
            <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
        </div>
    )
}
