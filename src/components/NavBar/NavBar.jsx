import React, {useState} from 'react';
import styles from '../NavBar/NavBar.module.css';
import {useHistory} from 'react-router-dom'

const NavBar = () => {

  const history = useHistory()
  

  return(
    <div>
      <div className={styles['navbar-container']}>
          <div id="one"  onClick={() => history.push('/category')} className={styles['nav-icons']}>
            <i className="fas fa-chevron-left fa-lg"></i>
            <div className={styles['icon-name']}>Back</div>
          </div>
          <div id="two" onClick={() => history.push('/')} className={styles['nav-icons']}>
            <i className="fas fa-home fa-lg"></i>
            <div className={styles['icon-name']}>Home</div>
          </div>
          <div  id="three"  className={styles['nav-icons']}>
            <i className="fas fa-info fa-lg"></i>
            <div className={styles['icon-name']}>Info</div>
          </div>
      </div>
    </div>
  )
}

export default NavBar;