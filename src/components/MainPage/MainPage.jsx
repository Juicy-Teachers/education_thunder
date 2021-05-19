import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.css';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import APIurl from '../../config'

const MainPage = () => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [randomQuestion, setRandomQuestion] = useState({});
  const [toggleButton, setToggleButton] = useState(true);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState([]);
  // const [category, setCategory] = useState('')

  const handleNextQues = () => {
    setToggleButton(!toggleButton)
  }

  const handleScore = (event) => {
      if(event.target.value == correctAnswer) {
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
        const response = await axios.get(`https://quisbee.herokuapp.com/trivia`);
        setRandomQuestion(response.data[Math.floor(Math.random() * response.data.length)])
        setCorrectAnswer(randomQuestion.correct);
        console.log(randomQuestion)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [toggleButton])
  
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
      <div className={styles['question-container']}>
        <h1 className={styles['render-question']}>
          {randomQuestion.question}
        </h1>
        <div className={styles['choices-btns']}>
          {/* {
            randomQuestion.answers.map((answer) => {
              return (
                <button onClick={handleScore} value={answer}>{answer}</button>
              )
            })
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