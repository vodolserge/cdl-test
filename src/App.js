import React, { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Button from './components/Button';
import ProgressBar from './components/ProgressBar';
import questions from "./configs/Texts";

const getShuffledArr = arr => {
    if (arr.length === 1) return arr;

    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...getShuffledArr(arr.filter((_, i) => +i !== +rand))];
};

const questionsShuffled = getShuffledArr(questions);

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
    const [language, setLanguage] = useState('en');

    const handleNext = () => {
        if (currentQuestionIndex < questionsShuffled.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswerIndex(null);
            setAnsweredCorrectly(false);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswerIndex(null);
            setAnsweredCorrectly(false);
        }
    };

    const handleAnswerSelect = (selectedOptionIndex) => {
        setSelectedAnswerIndex(selectedOptionIndex);
        setAnsweredCorrectly(selectedOptionIndex === questionsShuffled[currentQuestionIndex].correctAnswerIndex);
    };

    const renderQuestion = () => {
        const question = questionsShuffled[currentQuestionIndex];
        return (
            <Question
                question={question}
                selectedAnswerIndex={selectedAnswerIndex}
                correctAnswerIndex={question.correctAnswerIndex}
                answeredCorrectly={answeredCorrectly}
                onAnswerSelect={handleAnswerSelect}
                language={language}
            />
        );
    };

    const renderButtons = () => (
        <div className="button-container">
            <Button label="Prev" onClick={handlePrev} disabled={currentQuestionIndex === 0} />
            <Button
                label="Next"
                onClick={handleNext}
                disabled={selectedAnswerIndex === null}
            />
        </div>
    );

    return (
        <div className="app-container">
            <h2 className="app-title">CDL General Knowledge Test (based on <span>CDL Prep</span> mobile app)</h2>

            <div className="language-toggle">
                <button onClick={() => setLanguage('en')}>English</button>
                <button onClick={() => setLanguage('ru')}>Ru</button>
            </div>
            <ProgressBar current={currentQuestionIndex + 1} total={questionsShuffled.length} />
            {renderQuestion()}
            {renderButtons()}
        </div>
    );
};

export default App;
