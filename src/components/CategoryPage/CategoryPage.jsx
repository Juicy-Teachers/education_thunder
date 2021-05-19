import React, {useState, useContext} from 'react'
import styles from '../CategoryPage/Category.module.css'
import TheContext from '../../context/index'
import NavBar from '../NavBar/NavBar'
import {useHistory} from 'react-router-dom'
import Animals from '../../images/Quisbee_animals.png';

export default function CategoryPage() {
    const context = useContext(TheContext)
    const history = useHistory()

    const buttons = [
        {
            name: 'Animals',
            key: 'animals',
            photo_url: Animals
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
                    buttons.map(({name, key, photo_url, value}) => {
                        return (
                            <div className={styles["buttons"]}> 
                                <h1>{name}</h1>
                                <img src={photo_url}/>
                                <button onClick={handleClick} value={key} key={key}>Select</button>
                            </div>
                        )
                    })
                }
                </div>
            </main>  
            <footer className={styles['footer']}>
                <h2 className={styles['category-question']}>What would you like to learn?</h2>
            </footer>
        </div>
    )
}