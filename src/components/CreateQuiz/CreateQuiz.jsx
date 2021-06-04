import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import styles from '../CreateQuiz/CreateQuiz.module.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import APIurl from '../../config'

const CreateQuiz = () => {
  // const initialState = {
  //   question: '',
  //   answers: [],
  //   correct: '',
  //   category: 'custom',
  // }
  const question = useRef(null);
  const correctAnswer = useRef(null);
  const category = useRef(null)
  const incorrectAnswer1 = useRef(null);
  const incorrectAnswer2 = useRef(null);
  const incorrectAnswer3 = useRef(null);

  const history = useHistory();
  // const [questions, setQuestions] = useState(initialState)

  // const handleChange = (event) => {
  //   setQuestions({...questions, [event.target.name]: event.target.value})
  //   console.log(event.target.name)
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();
const body = {
      "question": question.current.value,
      "correct": correctAnswer.current.value,
      "category": 'custom',
      "answers": [
        correctAnswer.current.value,
        incorrectAnswer1.current.value,
        incorrectAnswer2.current.value,
        incorrectAnswer3.current.value
      ]
    }
    axios
			.post('https://quisbee.herokuapp.com/trivia', body)
			.then(() => {
				history.push('/create');
				// console.log(questions)
			})
			.catch(console.error);
    console.log(body)
    
  }

  return (
		<div className={styles['create-page-container']}>
			<NavBar />
			<form className={styles['form-container']} onSubmit={handleFormSubmit}>
				<div className={styles['input-fields']}>
					<label htmlFor='question'>
						<input
							// onChange={handleChange}
							className={styles['question-input']}
							type='text'
							ref={question}
							name='question'
							// value={questions.question}
							placeholder="What's your question?"
						/>
					</label>
					<br />
					<div className={styles['answers']}>
						<label htmlFor='correctAnswer'>
							<p className={styles['choices-header']}>
								Choices (Correct First)
							</p>
							<label htmlFor='category'>
								<option name='category'>
									Category: Custom
								</option>
							</label>
							<br />
							<input
								// onChange={handleChange}
								type='text'
								name='correct'
								ref={correctAnswer}
								placeholder='Choice 1'
							/>
						</label>
						<br />
						<label htmlFor='incorrectAnswer1'>
							<input
								// onChange={handleChange}
								type='text'
								name='answers'
								ref={incorrectAnswer1}
								placeholder='Choice 2'
							/>
						</label>
						<br />
						<label htmlFor='incorrectAnswer2'>
							<input
								// onChange={handleChange}
								type='text'
								name='answers'
								ref={incorrectAnswer2}
								placeholder='Choice 3'
							/>
						</label>
						<br />
						<label htmlFor='incorrectAnswer3'>
							<input
								// onChange={handleChange}
								type='text'
								name='answers'
								ref={incorrectAnswer3}
								placeholder='Choice 4'
							/>
						</label>
					</div>
				</div>
				<div className={styles['bottom-divider']}>
					<span></span>
				</div>
				<div className={styles['add-button-div']}>
					<button type='submit' className={styles['add-button']}>
						Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateQuiz;