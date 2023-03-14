import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export default function NavBar() {
    return (
        <div className="react-navbar">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Online Judge</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">History</Nav.Link>
                        <Nav.Link href="#contact">Problem Statement</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    ) 

} 
