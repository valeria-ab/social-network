import React from 'react';
import styles from '../Dialogs/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: number
}
function DialogItem (props: DialogItemPropsType) {
    let path = "/dialogs/" + props.id

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
function Message (props:MessagePropsType) {
    return (
        <div className={styles.message}>
            <span>{props.message}</span>
        </div>
    )
}

function Dialogs() {
    let dialogsData = [
        {id: 1, name: "Саша"},
        {id: 2, name: "Света"},
        {id: 3, name: "Надя"},
        {id: 4, name: "Коля"}
    ];
    let messagesData = [
        {id: 1, message: "Дай в долг!"},
        {id: 2, message: "Я набухалась"},
        {id: 3, message: "Плету ковёр..."},
        {id: 4, message: "Готовлю хрючево.."}
    ];
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>
                {
                    dialogsData.map(
                        el => <DialogItem
                            name={el.name}
                            id={el.id}
                        />
                    )}

            </div>


            <div className={styles.messages}>
                {
                    messagesData.map(
                        el => <Message
                            message={el.message}
                        />
                    )}

            </div>
        </div>
    )
}

export default Dialogs;