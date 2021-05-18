import React from 'react';
import {Link} from 'react-router-dom'
import styles from './IntroPage.module.css'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles ({
    root: {
        width: "300px",
        height: "100px"
    }
})

export default function IntroPage(props) {
    const btnStyles = useStyles()
    return (
        <div className={styles["intro"]}>
            <h1 className={styles["title"]}>This is the {props.page}</h1>
            <Link to='/main'>
                <Button className={btnStyles.root} variant="contained" color="primary" size="large">Play!</Button>
            </Link>
        </div>
    )
}