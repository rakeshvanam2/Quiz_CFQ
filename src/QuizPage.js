import React from "react";

function QuizPage({
  quizData,
  userAnswers,
  timer,
  onAnswerSelected,
  onFinishQuiz
}) {
  const currentQuestionIndex = userAnswers.length;
  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionSelect = (selectedOption) => {
    onAnswerSelected(currentQuestionIndex, selectedOption);
  };

  const handleFinishClick = () => {
    onFinishQuiz();
  };

  return (
    <div className="quiz-question">
      <h1>Quiz Page</h1>
      <p className="time">
        Time Remaining: {Math.floor(timer / 60)}:{timer % 60}
      </p>
      {currentQuestion && (
        <div className="question">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p className="p">{currentQuestion.question}</p>
          <ul>
            {currentQuestion.incorrect_answers.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleOptionSelect(option)}>
                  {option}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() =>
                  handleOptionSelect(currentQuestion.correct_answer)
                }
              >
                {currentQuestion.correct_answer}
              </button>
            </li>
          </ul>
          {currentQuestionIndex === quizData.length - 1 ? (
            <button className="button" onClick={handleFinishClick}>
              Finish Quiz
            </button>
          ) : (
            <button className="button" onClick={handleFinishClick}>
              Finish
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizPage;
