import React, { useState } from 'react';

const Question = ({
                      question,
                      selectedAnswerIndex,
                      correctAnswerIndex,
                      answeredCorrectly,
                      onAnswerSelect, language
                  }) => {

    const [showExplanations, setShowExplanations] = useState(Array(question.options[language].length).fill(false));

    const handleExplanationToggle = (index) => {
        const newExplanations = [...showExplanations];
        newExplanations[index] = !newExplanations[index];
        setShowExplanations(newExplanations);
    };

    return (
        <div className={`question-container`}>
            <h3>{question.text[language]}</h3>
            <div className="options-container">
                {question.options[language].map((option, index) => (
                    <div
                        key={index}
                        className={`option ${selectedAnswerIndex === index ? 'selected' : ''} ${
                            selectedAnswerIndex === index && answeredCorrectly
                                ? 'correct'
                                : selectedAnswerIndex === index && !answeredCorrectly
                                    ? 'incorrect'
                                    : ''
                        }`}
                        onClick={() => onAnswerSelect(index)}
                    >
                        {option}
                        <button
                            className={`explanation-button ${showExplanations[index] ? 'explanation-button-active' : ''}`}
                            onClick={() => handleExplanationToggle(index)}
                        >
                            ✅
                        </button>
                        {showExplanations[index] && (
                            <div className="explanation">
                                {question.explanations[language][index]}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

/*<ul className='words-list'>*/
/*    {question.words.map((word, index) => (*/
/*       <li className='word'>{word}</li>*/
/*    ))}*/
/*</ul>*/

export default Question;
