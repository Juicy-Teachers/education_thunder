import React, { useState, useEffect, useContext } from 'react';
import styles from './MainPage.module.css';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import APIurl from '../../config'
import TheContext from '../../context/index'

const MainPage = () => {
  const [randomQuestion, setRandomQuestion] = useState({});
  const [toggleButton, setToggleButton] = useState(true);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState([]);
  const context = useContext(TheContext)
  // const [category, setCategory] = useState('')

  const handleNextQues = () => {
    setToggleButton(!toggleButton)
  }

  const handleScore = (event) => {
      if(event.target.value == randomQuestion.correct) {
        correctChoice()
      } else {
        incorrectChoice()
      }
  }

  //click the right choice
    //+= 100
  //click wrong choice
    //do nothing
  //click the right choice after the wrong choice once
    //+= 50

  const correctChoice = () => {
    setScore(+100)
    handleNextQues()
  }

  const incorrectChoice = () => {
    setScore(-50)
  }

  useEffect(() => {
    (async() => {
      try {
        const res = await axios.get(`https://quisbee.herokuapp.com/trivia`);
        const response = res.data.filter(question => question.category === context.category)
        setRandomQuestion(response[Math.floor(Math.random() * response.length)])
      } catch (err) {
        console.error(err)
      }
    })()
  }, [toggleButton])
  
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
      <div className={styles['question-container']}>
        <h1 className={styles['render-question']}>
          {/* {randomQuestion.question} */}
        </h1>
        <div className={styles['choices-btns']}>
          {/* {
            randomQuestion.answers.length ?
            randomQuestion.answers.map((answer) => {
              return (
                <button onClick={handleScore} value={answer}>{answer}</button>
              )
            })
            :
            ""
          } */}
        </div>
        <button className={styles['next-btn']} onClick={handleNextQues}>
          <p className={styles['next-question']}>NEXT QUESTION</p>
        </button>
      </div>
    </div>
  )
}

export default MainPage;