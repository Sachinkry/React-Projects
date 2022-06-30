import React from "react"
import Start from "./components/Start";
import Quiz from "./components/Quiz";
// import { quizData } from "./data"

function App() {
  const [display, setDisplay] = React.useState(false)
  const [quizData, setQuizData] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {
        setQuizData(data.results)
        console.log(data.results)
      })
  }, [])

  // const quizEl = quizData.map(quiz => console.log(typeof quiz.question))

  function loadQuiz() {
    setDisplay(prevState => !prevState)
  }

  return (
    <div className="main-container">
      {display ?
        <div>
          {quizData.map(quiz => (
            <Quiz question={quiz.question} />
          ))}
        </div> :
        <Start handleClick={loadQuiz} />
      }
    </div>

  );
}

export default App;
