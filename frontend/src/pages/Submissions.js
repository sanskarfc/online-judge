import React, { useState, useEffect } from 'react';
import "../App.css";
import Navnav from "../components/Navbar";

export default function Submissions() {
    const [submissions, setSubmissions] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/submissions")
        .then((res) => res.json())
        .then((data) => {
            data.sort((a, b) => a._id - b._id);
            setSubmissions(data); 
        });
    }, []);
    
    return (
        <div>
        <Navnav />
        <div className="submissions">
            <h1>Submissions</h1>
            {submissions.map((submission) => (
            <div className="submission" key={submission._id}>
                <h3>{submission.submission_id}</h3> 
                <p>{submission.submission_code}</p>
                <p>{submission.submission_score}</p>
            </div>
            ))}
        </div>
        </div>
    );
}
