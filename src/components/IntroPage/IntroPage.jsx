import React from 'react';
import {Link} from 'react-router-dom'
import styles from './IntroPage.module.css'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles ({
    root: {
        width: "300px",
        height: "100px",
        fontSize: '40px',
        textDecoration: 'none'
    }
})

export default function IntroPage(props) {
    const btnStyles = useStyles()
    return (
        <div className={styles["intro"]}>
            <h1 className={styles["title"]}>QuizBee</h1>
            <Link to='/category' style={{textDecoration: 'none'}}>
                <Button className={btnStyles.root} variant="contained" color="primary" size="large">Play!</Button>
            </Link>
            <Link to='/create' style={{textDecoration: 'none'}}>
                <button>
                    Create
                </button>
            </Link>
        </div>
    )
}