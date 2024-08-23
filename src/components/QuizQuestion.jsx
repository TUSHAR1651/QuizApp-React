import React, { useState, useEffect } from 'react';
import './QuizQuestion.css';

function QuizQuestion({ questions, darkMode, onFinish }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setSelectedQuestions(shuffled.slice(0, 10));
    }, [questions]);

    const handleAnswer = (option) => {
        if (answered) return;

        const currentQuestion = selectedQuestions[currentQuestionIndex];

        if (currentQuestion.type === 'multiple') {
            const updatedOptions = selectedOptions.includes(option)
                ? selectedOptions.filter(item => item !== option)
                : [...selectedOptions, option];
            setSelectedOptions(updatedOptions);
        } else {
            setSelectedOptions([option]);
            setAnswered(true);
            checkAnswer([option], currentQuestion);
        }
    };

    const checkAnswer = (selected, question) => {
        const isCorrect = Array.isArray(question.correctAnswer)
            ? question.correctAnswer.every(answer => selected.includes(answer)) &&
            selected.length === question.correctAnswer.length
            : selected[0] === question.correctAnswer;

        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < 9) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setAnswered(false);
                setSelectedOptions([]);
            } else {
                setQuizCompleted(true);
            }
        }, 2000);
    };

    const handleSubmit = () => {
        if (answered) return;
        setAnswered(true);
        checkAnswer(selectedOptions, selectedQuestions[currentQuestionIndex]);
    };

    if (selectedQuestions.length === 0) return null;

    const currentQuestion = selectedQuestions[currentQuestionIndex];

    if (quizCompleted) {
        return (
            <div className={`quiz-completed ${darkMode ? 'dark-mode' : ''}`}>
                <h2>Quiz Completed!</h2>
                <p>Your score: {score} out of 10</p>
                <button onClick={onFinish}>Back to Categories</button>
            </div>
        );
    }

    return (
        <div className={`quiz-question ${darkMode ? 'dark-mode' : ''}`}>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{currentQuestion.question}</p>
            <p className="question-type">{currentQuestion.type} choice question</p>
            <div className={`options ${currentQuestion.type}`}>
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className={`
                            ${answered && (Array.isArray(currentQuestion.correctAnswer)
                                ? currentQuestion.correctAnswer.includes(option)
                                : option === currentQuestion.correctAnswer) ? 'correct' : ''}
                            ${answered && selectedOptions.includes(option) &&
                                !(Array.isArray(currentQuestion.correctAnswer)
                                    ? currentQuestion.correctAnswer.includes(option)
                                    : option === currentQuestion.correctAnswer) ? 'incorrect' : ''}
                            
                            ${selectedOptions.includes(option) ? 'selected' : ''}
                        `}
                        disabled={answered}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {currentQuestion.type === 'multiple' && !answered && (
                <button onClick={handleSubmit} className="submit-btn">Submit Answer</button>
            )}
            {answered && (
                <div className="answer-feedback">
                    {selectedOptions.every(option =>
                        Array.isArray(currentQuestion.correctAnswer)
                            ? currentQuestion.correctAnswer.includes(option)
                            : option === currentQuestion.correctAnswer
                    ) && selectedOptions.length === (Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.length : 1) ? (
                        <p className="correct-answer">Correct!</p>
                    ) : (
                        <p className="wrong-answer">
                            Wrong. The correct answer is: {Array.isArray(currentQuestion.correctAnswer)
                                ? currentQuestion.correctAnswer.join(", ")
                                : currentQuestion.correctAnswer}
                        </p>
                    )}
                </div>
            )}
            <div className="score-display">
                Current Score: {score}
            </div>
        </div>
    );
}

export default QuizQuestion;