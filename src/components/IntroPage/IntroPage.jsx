import React from 'react';
import {Link} from 'react-router-dom';
import styles from './IntroPage.module.css';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import BeeImage from '../../resources/color_logo_transparent.svg';

const useStyles = makeStyles ({
    root: {
        width: "300px",
        height: "100px",
        fontSize: '40px',
        textDecoration: 'none',
        marginTop: "-50%"
    }
})

export default function IntroPage(props) {
    const btnStyles = useStyles()
    return (
        <div className={styles["intro"]}>
            {/* <h1 className={styles["title"]}>QuizBee</h1> */}
            <img alt="quizbee.png" src={BeeImage} height="75%" width="auto"></img>
            <Link to='/category' style={{textDecoration: 'none'}}>
                <Button className={btnStyles.root} variant="contained" color="primary" size="large">Play!</Button>
            </Link>
            {/* <Shark lotti={Shark} height={300} width={300}/> */}

            <Link to='/create' style={{textDecoration: 'none'}}>
                <button className={styles['create-btn']}>
                    Create
                </button>
            </Link>
        </div>
    )
}