import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.css';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import APIurl from '../../config'

const MainPage = () => {
  const [data, setData] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState({})
  const [toggleButton, setToggleButton] = useState(true)
  // const [category, setCategory] = useState('')

  const handleClick = () => {
    setToggleButton(!toggleButton)
  }

  

  useEffect(() => {
    ( async() => {
      try {
        const response = await axios.get(`https://quisbee.herokuapp.com/trivia`);
        setData(response);
        setRandomQuestion(response.data[Math.floor(Math.random() * response.data.length)])
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])
  
  return (
    <div>
      <NavBar />
      <div className={styles['question-container']}>
        <h1 className={styles['render-question']}>
          {randomQuestion.question}
        </h1>
        <div className={styles['choices-btns']}>
          {/* {
            randomQuestion.answers.map((answer) => {
              return (
                <button>{answer}</button>
              )
            })
          } */}
        </div>
        <button className={styles['next-btn']} onClick={handleClick}>
          <p className={styles['next-question']}>NEXT QUESTION</p>
        </button>
      </div>
    </div>
  )


}

export default MainPage;