import React, { useState } from "react";
import "./styles.css";

function StartPage({ onStartQuiz }) {
  const [email, setEmail] = useState("");

  const handleStartClick = () => {
    if (email) {
      onStartQuiz(email);
    }
  };

  return (
    <div className="start-page">
      <h1>Causal Funnel Quiz</h1>
      <p>Please enter your email to start:</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="input-box"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="button" onClick={handleStartClick}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartPage;
