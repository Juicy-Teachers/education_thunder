import React, {useState, useContext} from 'react'
import styles from '../CategoryPage/Category.module.css'
import TheContext from '../../context/index'
import NavBar from '../NavBar/NavBar'
import {useHistory} from 'react-router-dom'

export default function CategoryPage() {
    const context = useContext(TheContext)
    const history = useHistory()

    const buttons = [
        {
            name: 'Animals',
            key: 'animals',
        },
        {
            name: "Social Studies",
            key: 'social studies'
        },
        {
            name: 'Food',
            key: 'food',
        },
        {
            name: 'Money',
            key: 'money'
        },
        {
            name: 'Space',
            key: 'space'
        }
    ]

    const handleClick = (event) => {
        context.setCategory(event.target.value)
        history.replace('/main')
    }

    return(
        <div>
            <NavBar />
            <main className={styles["main"]}>
                <div className={styles["button-div"]}>
                {
                    buttons.map(({name, key, value}) => {
                        return (
                            <div className={styles["buttons"]}> 
                                <h1>{name}</h1>
                                <button onClick={handleClick} value={key} key={key}>Select</button>
                            </div>
                        )
                    })
                }
                </div>
            </main>  
            <footer className={styles["footer"]}>
                <h2>What would you like to learn?</h2>
            </footer>
        </div>
    )
}