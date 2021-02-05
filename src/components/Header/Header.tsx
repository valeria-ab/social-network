import React from 'react';
import styles from '../Header/Header.module.css';

function Header() {
    return (
       <header className={styles.header}>
           <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1164px-Logo_TV_2015.svg.png"
                 alt="logj"/>
       </header>
    )
}
export default Header;