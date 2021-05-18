import React, { useRef } from 'react';
import styles from '../CreateQuiz/CreateQuiz.module.css';
import NavBar from '../NavBar/NavBar';

const CreateQuiz = () => {
  const question = useRef(null);
  const correctAnswer = useRef(null);
  const incorrectAnswer1 = useRef(null);
  const incorrectAnswer2 = useRef(null);
  const incorrectAnswer3 = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      "question": question.current.value,
      "correctAnswer": correctAnswer.current.value,
      "incorrectAnswers": [
        incorrectAnswer1.current.value,
        incorrectAnswer2.current.value,
        incorrectAnswer3.current.value
      ]
    }
  }

  return (
    <div>
      <NavBar />
      <form className={styles['form-container']} onSubmit={handleFormSubmit}>
        <div className={styles['input-fields']}>
        <label htmlFor="question">
          <input type="text" ref={question} placeholder="What's your question?"/>
        </label>
        <br />
        <label htmlFor="correctAnswer">
          <p className={styles['choices-header']} >
            Choices (Correct First)
          </p>
          <input type="text" ref={correctAnswer} placeholder="Choice 1"/>
        </label>
        <br />
        <label htmlFor="incorrectAnswer1">
          <input type="text" ref={incorrectAnswer1} placeholder="Choice 2"/>
        </label>
        <br />
        <label htmlFor="incorrectAnswer2">
          <input type="text" ref={incorrectAnswer2} placeholder="Choice 3"/>
        </label>
        <br />
        <label htmlFor="incorrectAnswer3">
          <input type="text" ref={incorrectAnswer3} placeholder="Choice 4"/>
        </label>
        </div>
        <div className={styles['bottom-divider']}>
          <span></span>
        </div>
        <button type="submit" className={styles['add-button']}>
          <i className="fas fa-plus fa-lg"></i>
        </button>
          
      </form>
      
      
    </div>
  )
}

export default CreateQuiz;