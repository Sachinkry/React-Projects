import React from "react"
// import { quizData } from "../data"

export default function Quiz(props) {
    // <div className="options">
    //     <ul className="items">
    //         <li className="item">{quiz.options[0]}</li>
    //         <li className="item">{quiz.options[1]}</li>
    //         <li className="item">{quiz.options[2]}</li>
    //         <li className="item">{quiz.options[3]}</li>
    //     </ul>
    // </div>
    // <hr className="line" />
    return (
        <div >
            <h3 className="question">{props.question}</h3>
        </div>
    )
}