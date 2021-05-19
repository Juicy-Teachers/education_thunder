import React, { useState, useEffect, useContext } from 'react';
import styles from './MainPage.module.css';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import TheContext from '../../context/index';


const MainPage = () => {
  const [start, setStart] = useState(false)
  const [randomQuestion, setRandomQuestion] = useState({});
  const [toggleButton, setToggleButton] = useState(true);
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const context = useContext(TheContext)
  // const [category, setCategory] = useState('')


  useEffect(() => {
    (async() => {
      try {
        const res = await axios.get(`https://quisbee.herokuapp.com/trivia`);
        const response = res.data.filter(question => question.category == context.category)
        setRandomQuestion(response[Math.floor(Math.random() * response.length)])
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [toggleButton])


  const timerFunc = (time) => {
    let amount = time
    if (start) {
      for(let i = 0; i < amount; i++){
      setTimeout(() => {
      setTimer(timer - 1)
      if (timer <= 0 ) {
        setGameOver(true)
        setStart(false)
      }
    }, 1000);
    }
    }
    return timer
  }
    
  const handleNextQues = () => {
    setToggleButton(!toggleButton)
  }

  const handleScore = (event) => {
      if(event.target.value === randomQuestion.correct) {
        correctChoice()
      } else {
        incorrectChoice()
      }
  }

  const handleStart = () => {
    setStart(true)
  }

  const correctChoice = () => {
    setScore(score + 100)
    handleNextQues()
  }

  const incorrectChoice = () => {
    setScore(score - 50)
  }

  return (
    <div>
      <NavBar />
      <div className={styles['score-timer-container']}>
        <div className={styles['scoreboard']}>
          <div className={styles['current-score']}>
            {score}
            <p className={styles['score-word']}>Score</p>
          </div>
        </div>
        <div className={styles['timer']}>
          <div className={styles['time-remaining']}>
            {timerFunc(60)}
            <p className={styles['time-word']}>Time</p>
          </div>
        </div>
      </div>
      {
        gameOver?
        <h1>Times Up!</h1>
        :
        start ?
        <div className={styles['question-container']}>
          <h1 className={styles['render-question']}>
            {randomQuestion.question}
          </h1>
          <div className={styles['choices-div']}>
            {
              randomQuestion.answers.map((answer) => {
                return (
                  <button className={styles['choices-btn']} onClick={handleScore} value={answer}>{answer}</button>
                )
              })
            }
          </div>
          <button className={styles['next-btn']} onClick={handleNextQues}>
            <p className={styles['next-question']}>NEXT QUESTION</p>
          </button>
        </div>
        :
        <div className={styles['start-btn-div']}>
          <button className={styles['start-btn']} onClick={handleStart}>Start!</button>
        </div>
      }
    </div>
    )
}

export default MainPage;