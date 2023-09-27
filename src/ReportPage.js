import React from "react";
import "./styles.css";

function ReportPage({ quizData, userAnswers }) {
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === quizData[i].correct_answer) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className="report-page">
      <h1>Quiz Report</h1>
      <p>
        Your Score: {calculateScore()} out of {quizData.length}
      </p>
      <h2>Questions and Answers</h2>
      <ul>
        {quizData.map((question, index) => (
          <li key={index}>
            <strong>Question {index + 1}:</strong> {question.question}
            <br />
            <strong className="your_answer">Your Answer:</strong>
            <span
              style={{
                color:
                  userAnswers[index] === question.correct_answer
                    ? "green"
                    : "red",
                fontWeight: "bold"
              }}
            >
              {userAnswers[index]}
            </span>
            <br />
            <strong className="correct_answer">Correct Answer:</strong>
            <span style={{ color: "green", fontWeight: "bold" }}>
              {question.correct_answer}
            </span>
          </li>
        ))}
      </ul>
      <h4>Thank you....</h4>
      <h5 className="name_footer"> Vanam Rakesh</h5>
    </div>
  );
}

export default ReportPage;
