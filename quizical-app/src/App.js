import React from "react"
// import Start from "./components/Start";
import Quiz from "./components/Quiz";

function App() {
  const [quizData, setQuizData] = React.useState(callApi())
  // <Start />
  function callApi() {
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
  }
  // callApi()

  // console.log(quizData)
  const quizQuestions = quizData.map(data => {
    return (
      <p>{data.question}</p>
    )
  })

  // <div className="quiz-container">
  //   <Quiz />
  //   <Quiz />
  //   <Quiz />
  //   <Quiz />
  //   <Quiz />
  //   <button className="check-ans-btn">Check Answers</button>
  // </div>
  return (
    <div className="main-container">
      {quizQuestions}
    </div>
  );
}

export default App;
