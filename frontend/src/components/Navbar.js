import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Navnav() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/problem">Problem</Nav.Link>
                    <Nav.Link href="/doubts">Forum</Nav.Link>
                    <Nav.Link href="/profile">Submissions</Nav.Link>
                    <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

