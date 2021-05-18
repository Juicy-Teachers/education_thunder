import React from 'react';
import {Link} from 'react-router-dom'
import styles from './IntroPage.module.css'

export default function IntroPage(props) {
    return (
        <div className="intro">
            <h1 className="title">This is the {props.page}</h1>
            <Link to='/main'>
                <button>Play!</button>
            </Link>
        </div>
    )
}