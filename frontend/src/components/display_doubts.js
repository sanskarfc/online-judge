import React, { useState, useEffect } from "react";
import "../App.css";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]); // array containing questions 

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/question");
      const data = await response.json();
      setQuestions(data.sort((a, b) => a.timestamp - b.timestamp)); // from where did we get the timestamp here ?? 
    };
    fetchQuestions();
  }, []); 

  return (
    <div className="doubts-on-screen">
        <button className="clear-button" onSubmit={() => {setQuestions([])}}>Clear Questions</button>
        <h3 className="list-heading">New Doubts Below</h3>
          {questions.map((question) => (
            <div key={question.question_id} className="listing">
              <div className="question-box">
                <div className="question-author">{question.question_author}</div>
                <div className="question-content">{question.question_content}</div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default AllQuestions;

