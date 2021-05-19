import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.css';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState({});
  const [toggleButton, setToggleButton] = useState(true);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState([]);
  // const [category, setCategory] = useState('')

  const handleClick = () => {
    setToggleButton(!toggleButton)
  }

  // const handleScore = () => {
  //   if correctChoice onClick setScore += 100
  // else if second click === correctChoice setScore += 50
  //   else do nothing 
  // }

  //click the right choice
    //+= 100
  //click wrong choice
    //do nothing
  //click the right choice after the wrong choice once
    //+= 50

  const correctChoice = () => {
    setScore(+100)
  }

  const incorrectChoice = () => {
    setScore(-50)
  }

  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=13&category=27&difficulty=easy&type=multiple`);
        setData(response.data.results);
        setRandomQuestion(response.data.results[Math.floor(Math.random() * response.data.results.length)])
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
          {randomQuestion.question}
        </h1>
        <div className={styles['choices-btns']}>
          <button onClick={() => correctChoice()}>Choice 1</button>
          <button onClick={() => incorrectChoice()}>Choice 2</button>
          <button onClick={() => incorrectChoice()}>Choice 3</button>
          <button onClick={() => incorrectChoice()}>Choice 4</button>
        </div>
        <button className={styles['next-btn']} onClick={handleClick}>
          <p className={styles['next-question']}>NEXT QUESTION</p>
        </button>
      </div>
    </div>
  )
}

export default MainPage;