import styles from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';


type DialogItemPropsType = {
    name: string
    id: number
}

 function DialogItem(props: DialogItemPropsType) {
    let path = '/dialogs/' + props.id

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;