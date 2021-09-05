import React from 'react';
import styles from '../Header/Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

function Header(props: HeaderPropsType) {
    return (
       <header className={styles.header}>
           <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1164px-Logo_TV_2015.svg.png"
                 alt="logj"/>

                 <div className={styles.loginBlock}>
                     {
                         props.isAuth ? props.login
                     :<NavLink to={"/login"}>Login</NavLink>
                     }
                 </div>
       </header>
    )
}
export default Header;