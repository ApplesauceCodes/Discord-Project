import React, { useState, useEffect } from 'react';
import './QuizPage.css';

const QuizPage = () => {
    //Temp Questions
  const initialQuestions = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' },
    { question: 'What is the color of the sky?', options: ['Blue', 'Green', 'Red'], answer: 'Blue' },
    { question: 'What is 10 / 2?', options: ['4', '5', '6'], answer: '5' },
    { question: 'What is the square root of 9?', options: ['2', '3', '4'], answer: '3' }
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Shuffle questions and reset state on load
  useEffect(() => {
    setQuestions(shuffleArray([...initialQuestions]));
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleOptionClick = (option) => {
    setAnswers([...answers, { question: questions[currentQuestionIndex].question, selected: option, correct: questions[currentQuestionIndex].answer }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    return answers.filter(answer => answer.selected === answer.correct).length;
  };

  const resetQuiz = () => {
    setQuestions(shuffleArray([...initialQuestions]));
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  if (questions.length === 0) {
    return <div>Loading quiz...</div>; // Show a loading state while questions are being set
  }

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <div className="quiz-card">
          <div className="quiz-header">Quiz</div>
          <div className="question">{questions[currentQuestionIndex].question}</div>
          <ul className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} className="option-item" onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="quiz-card">
          <div className="quiz-header">Quiz Completed!</div>
          <div className="score">Your Score: {calculateScore()} / {questions.length}</div>
          <div className="summary">
            {answers.map((answer, index) => (
              <div key={index} className="summary-item">
                <div className="summary-question">{index + 1}. {answer.question}</div>
                <div className={`summary-answer ${answer.selected === answer.correct ? 'correct' : 'incorrect'}`}>
                  Your Answer: {answer.selected}
                </div>
                {answer.selected !== answer.correct && (
                  <div className="correct-answer">Correct Answer: {answer.correct}</div>
                )}
              </div>
            ))}
          </div>
          <button className="quiz-again-button" onClick={resetQuiz}>Quiz Again</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
