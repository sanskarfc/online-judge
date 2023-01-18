import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';


export default function App() {
  const [code,setCode] = useState('');
  const [output,setOutput] = useState('');
  
  const handleSubmit = async () => {
      console.log(code); // for debugging 
      try {
          const response = await fetch('http://localhost:4000/run-code', {
              method: 'POST',
              body: JSON.stringify({ code: code }),
              headers: { 'Content-Type': 'application/json' },
          });
          const result = await response.json();
      } catch (err) {
          console.error(err);
      }
  };

    return (
        <div className='App'>
            <div className="react-navbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">My App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Online Judge</Nav.Link>
                            <Nav.Link href="#about">History</Nav.Link>
                            <Nav.Link href="#contact">Problem Statement</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <h1>Code Editor 👇</h1>
            <div className="Code-Editor">
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                    }}
                />
            </div> 
            <button onClick={handleSubmit}>Run Code</button>
            <div className="output-test">
                <h2>Output: </h2> 
            </div>
        </div>
    );
}



// to do: 
// make better frontend (give border to code editor)
// choosing language changes the syntax hihglighting 
// there should we a navbar with home, account and history (history should contain the points and code from all the previous runs)
// there should be a panel on botton of code editor which shows the results (instead of the server terminal)
