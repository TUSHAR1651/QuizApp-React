import React, { useState } from 'react';
import './Quiz.css';
import QuizCategories from './QuizCategories';
import Working from '../Assets/personal-finance-work-from-home-guide_round1_grey-dfcbdfa007674b3bb6a568c8cf42b849.png';

function Quiz() {
    const [darkMode, setDarkMode] = useState(false);
    const [showQuizCategories, setShowQuizCategories] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleQuizTypesClick = (e) => {
        e.preventDefault();
        setShowQuizCategories(true);
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        setShowQuizCategories(false); 
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <header>
                <h1 onClick={handleHomeClick}>AtoZ Quiz</h1>
                <nav className='new'> 
                    <a href="#quiz-types" onClick={handleQuizTypesClick}>QUIZ TYPES</a>
                </nav>
                <div className="user-section">
                    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </header>
            <main>
                {!showQuizCategories ? (
                    <>
                        <section className="hero">
                            <div className="hero-content">
                                <h2>Brush up your knowledge by taking Quizzes</h2>
                                <button className="cta-button" onClick={() => setShowQuizCategories(true)}>AtoZ Quiz</button>
                            </div>
                            
                                <img src={Working} alt="" style={{ width: '25%', height: '75%' }} />

                        </section>
                        <section className="quiz-topics">
                            <div className="topics-content">
                                <h3>Take quiz on different topics</h3>
                                <p>You can explore different categories and take quiz.</p>
                                <ul>
                                    <li>General Knowledge</li>
                                    <li>Science: Computers</li>
                                    <li>Science: Gadgets</li>
                                    <li>Science & Nature</li>
                                    <li>Animals</li>
                                    <li>Vehicles</li>
                                </ul>
                            </div>
                        </section>
                    </>
                ) : (
                    <QuizCategories />
                )}
            </main>
        </div>
    );
}

export default Quiz;
