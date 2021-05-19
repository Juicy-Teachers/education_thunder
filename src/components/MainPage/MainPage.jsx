import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.css';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';

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
      <div className={styles['question-container']}>
        <h1 className={styles['render-question']}>
          {randomQuestion.question}
        </h1>
        <div className={styles['choices-btns']}>
          <button>Choice 1</button>
          <button>Choice 2</button>
          <button>Choice 3</button>
          <button>Choice 4</button>
        </div>
        <button className={styles['next-btn']} onClick={handleClick}>
          <p className={styles['next-question']}>NEXT QUESTION</p>
        </button>
      </div>
    </div>
  )


}

export default MainPage;