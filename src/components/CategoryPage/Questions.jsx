import React, { useState, useEffect } from 'react';
import APIurl from '../../config'
import axios from 'axios'

const Questions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios(`${APIurl}/trivia`).then((res) => setQuestions(res.data)).catch(console.error) 
        console.log(questions)
    }, [])
    if (!questions.length){
        return <h1> loading...</h1>
    }

    return (
        <div>
            {questions.map((question) => {
                return <h3> {question.question} </h3>
            })}
        </div>
    );
};

export default Questions;