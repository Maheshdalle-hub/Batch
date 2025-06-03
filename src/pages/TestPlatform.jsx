import React, { useState, useEffect } from 'react';
import testData from './testdata';
import "../styles/styles.css";

const TestPlatform = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(600);

  useEffect(() => {
    let interval;
    if (selectedTest && !submitted) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [selectedTest, submitted]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleOptionClick = (index) => {
    if (submitted) return;
    setAnswers({ ...answers, [currentQuestion]: index });
  };

  const handleNext = () => {
    setCurrentQuestion(q => Math.min(q + 1, questions.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestion(q => Math.max(q - 1, 0));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setCurrentQuestion(0);
  };

  if (!selectedSubject) {
    return (
      <div className="container">
        <h1 className="heading">Choose a Subject</h1>
        <div className="grid">
          {Object.keys(testData).map(subject => (
            <div key={subject} className="card" onClick={() => setSelectedSubject(subject)}>
              {subject}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedTest) {
    return (
      <div className="container">
        <h1 className="heading">{selectedSubject} - Choose a Test</h1>
        <div className="grid">
          {Object.keys(testData[selectedSubject]).map(test => (
            <div key={test} className="card" onClick={() => setSelectedTest(test)}>
              {test}
            </div>
          ))}
        </div>
        <button className="back-btn" onClick={() => setSelectedSubject(null)}>← Back</button>
      </div>
    );
  }

  const questions = testData[selectedSubject][selectedTest];
  const current = questions[currentQuestion];

  const score = questions.reduce((acc, q, i) => {
    return acc + (answers[i] === (q.correctAnswer - 1) ? 1 : 0);
  }, 0);

  const renderQuestion = () => {
    if (!current) return null;

    return (
      <div>
        {current.usePre ? (
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              overflowX: 'auto',
              background: 'transparent',
              border: 'none',
              padding: 0,
              fontSize: '16px',
              marginBottom: '1rem',
            }}
          >
            {current.question}
          </pre>
        ) : (
          <h2 style={{ fontSize: '20px', marginBottom: '1rem' }}>
            {current.question}
          </h2>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="top-bar">
        <div>Time Left: {formatTime(timer)}</div>
        {submitted && <div>Score: {score}/{questions.length}</div>}
      </div>

      <div className="question-box">
        <div className="question-header">
          Question {currentQuestion + 1} / {questions.length}
        </div>

        {renderQuestion()}

        <div className="options">
          {current.options.map((option, index) => {
            const isSelected = answers[currentQuestion] === index;
            const isCorrect = submitted && index === (current.correctAnswer - 1);
            const isWrong = submitted && isSelected && index !== (current.correctAnswer - 1);

            return (
              <div
                key={index}
                className={`option ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                onClick={() => handleOptionClick(index)}
              >
                {option}
                {submitted && isSelected && (
                  <div style={{ fontSize: '12px', color: '#555' }}>Your Answer</div>
                )}
              </div>
            );
          })}
        </div>

        {submitted && (
          <div className="explanation">
            <strong>Explanation:</strong> {current.explanation}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {currentQuestion !== 0 && (
            <button onClick={handlePrev}>Previous</button>
          )}
        </div>
        <div>
          {(!submitted && currentQuestion === questions.length - 1) ? (
            <button className="submit-btn" onClick={handleSubmit}>Submit Test</button>
          ) : (
            currentQuestion !== questions.length - 1 && (
              <button onClick={handleNext}>Next</button>
            )
          )}
        </div>
      </div>

      {/* Unattempted and Back */}
      {submitted && (
        <>
          <div className="unattempted">
            <h3>Unattempted Questions:</h3>
            <ul>
              {questions.map((_, i) =>
                answers[i] === undefined ? <li key={i}>Question {i + 1}</li> : null
              )}
            </ul>
          </div>
          <button className="back-btn" onClick={() => {
            setSelectedTest(null);
            setSubmitted(false);
            setAnswers({});
            setTimer(600);
            setCurrentQuestion(0);
          }}>← Back</button>
        </>
      )}
    </div>
  );
};

export default TestPlatform;
