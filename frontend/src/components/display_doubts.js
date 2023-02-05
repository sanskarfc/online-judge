import React, { useState, useEffect } from "react";
import "../App.css";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/question");
      const data = await response.json();
      setQuestions(data.sort((a, b) => a.timestamp - b.timestamp));
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.map((question) => (
        <div key={question.question_id}>
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

