import React, { useState, useEffect } from "react";
import StartPage from "./StartPage";
import QuizPage from "./QuizPage";
import ReportPage from "./ReportPage";

function App() {
  const [currentPage, setCurrentPage] = useState("start");
  const [email, setEmail] = useState(""); // Store the user's email
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(15 * 60); // Timer in seconds

  useEffect(() => {
    // Fetch quiz questions from the API
    fetch("https://opentdb.com/api.php?amount=15")
      .then((response) => response.json())
      .then((data) => setQuizData(data.results))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
        handleFinishQuiz();
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const handleStartQuiz = (userEmail) => {
    setEmail(userEmail);
    setCurrentPage("quiz");
  };

  const handleFinishQuiz = () => {
    setCurrentPage("report");
  };

  const handleAnswerSelected = (questionIndex, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);

    if (updatedAnswers.length === quizData.length) {
      handleFinishQuiz();
    }
  };

  return (
    <div className="App">
      {currentPage === "start" && <StartPage onStartQuiz={handleStartQuiz} />}
      {currentPage === "quiz" && (
        <QuizPage
          email={email} // Pass the user's email to the QuizPage
          timer={timer} // Pass the timer to the QuizPage
          quizData={quizData}
          userAnswers={userAnswers}
          onAnswerSelected={handleAnswerSelected}
          onFinishQuiz={handleFinishQuiz}
        />
      )}
      {currentPage === "report" && (
        <ReportPage
          email={email} // Pass the user's email to the ReportPage
          timer={timer} // Pass the timer to the ReportPage
          quizData={quizData}
          userAnswers={userAnswers}
        />
      )}
    </div>
  );
}

export default App;
