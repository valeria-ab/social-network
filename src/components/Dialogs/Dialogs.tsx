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
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>
                <DialogItem name={"Саша"} id={1}/>
                <DialogItem name={"Света"} id={2}/>
                <DialogItem name={"Надя"} id={3}/>
                <DialogItem name={"Коля"} id={4}/>
            </div>


            <div className={styles.messages}>
                <Message message={"Дай в долг!"} />
                <Message message={"Я набухалась"} />
                <Message message={"Плету ковёр..."} />
                <Message message={"Готовлю хрючево.."} />
            </div>
        </div>
    )
}

export default Dialogs;