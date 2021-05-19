import React, { useState, useEffect, useContext } from 'react';
import styles from './MainPage.module.css';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import APIurl from '../../config';
import TheContext from '../../context/index';


const MainPage = () => {
  const [start, setStart] = useState(false)
  const [randomQuestion, setRandomQuestion] = useState({});
  const [toggleButton, setToggleButton] = useState(true);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
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
  }, [])

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

  //click the right choice
    //+= 100
  //click wrong choice
    //do nothing
  //click the right choice after the wrong choice once
    //+= 50

  const correctChoice = () => {
    setScore(score + 100)
    handleNextQues()
  }

  const incorrectChoice = () => {
    setScore(score - 50)
  }


  
  console.log(randomQuestion.answers);
  return (
    <div>
      <NavBar />
      <div className={styles['score-timer-container']}>
        <div className={styles['scoreboard']}>
          <div className={styles['current-score']}>
            {score}
          </div>
        </div>
        <div className={styles['timer']}>
          <div className={styles['time-remaining']}>
            {timer}
          </div>
        </div>
      </div>
      {
        start ?
        <div className={styles['question-container']}>
          <h1 className={styles['render-question']}>
            {randomQuestion.question}
          </h1>
          <div className={styles['choices-btns']}>
            {
              
              randomQuestion.answers.map((answer) => {
                return (
                  <button onClick={handleScore} value={answer}>{answer}</button>
                )
              })
              
            }
          </div>
          <button className={styles['next-btn']} onClick={handleNextQues}>
            <p className={styles['next-question']}>NEXT QUESTION</p>
          </button>
        </div>
        :
        <button onClick={handleStart}>Start!</button>
      }
    </div>
  )
}

export default MainPage;