import React from 'react';
import styles from '../NavBar/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div>
      <div className={styles['navbar-container']}>
          <div className={styles['nav-icons']}>
            <i className="fas fa-chevron-left fa-lg"></i>
            <div className={styles['icon-name']}>Back</div>
          </div>
          <div className={styles['nav-icons']}>
            <i className="fas fa-home fa-lg"></i>
            <div className={styles['icon-name']}>Home</div>
          </div>
          <div className={styles['nav-icons']}>
            <i className="fas fa-info fa-lg"></i>
            <div className={styles['icon-name']}>Info</div>
          </div>
      </div>
    </div>
  )
}

export default NavBar;