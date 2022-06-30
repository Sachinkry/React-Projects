import React from "react"

export default function StartQuiz(props) {
    return (
        <div className="start">
            <h1 className="start-header">Quizical</h1>
            <h3 className="quiz-info">Some description if needed</h3>
            <button className="start-btn" onClick={props.handleClick}>Start Quiz</button>
        </div>
    )
}