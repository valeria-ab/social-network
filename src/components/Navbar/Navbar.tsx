import React from 'react';
import styles from '../Navbar/Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={ `${styles.item} ${styles.active}`}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={`${styles.item} ${styles.active}`}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>


        </div>
    )
}

export default Navbar;