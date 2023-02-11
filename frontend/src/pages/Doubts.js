import React, { useState } from 'react';  
import "../App.css";
import Navnav from "../components/Navbar";
import AllQuestions from "../components/display_doubts";
 
{/*make a page to add question*/}

export default function Doubts() {
    const [questionId, setQuestionId] = useState("");
    const [questionContent, setQuestionContent] = useState("");
    const [questionAuthor, setQuestionAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question_id: questionId,
                question_content: questionContent,
                question_author: questionAuthor,
            }),
        }); 
        
        if(response.ok) {
            console.log("Question added successfully !!");
        } else {
            console.log("Error adding question !!");
        } 
        
        // setting the input fields to empty
        setQuestionId("");
        setQuestionAuthor("");
        setQuestionContent(""); 

    }; 

    return (
        <div className="doubts-page">
            <Navnav />            
            <h1 className="doubt-heading">Ask Your Doubts Here!</h1>    
            <div className="input-doubt">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Question ID'
                        value={questionId}
                        onChange={(e) => setQuestionId(e.target.value)}
                    />
                  <input
                        type="text"
                        placeholder='Question Content'
                        value={questionContent}
                        onChange={(e) => setQuestionContent(e.target.value)}
                    /> 
                    <input 
                        type="text"
                        placeholder='Question Author'
                        value={questionAuthor}
                        onChange={(e) => setQuestionAuthor(e.target.value)}
                    /> 
                    <button type="submit">Add Question</button>

                </form>  
            </div> 
            <AllQuestions />
            {/* Sanskar Working on this rn */}
            {/* Make a doubts page where people can create a doubt --> done */}
            {/* Adding comments should also be possible --> something like reddit but threads are not needed */} 
        </div>     )
}
