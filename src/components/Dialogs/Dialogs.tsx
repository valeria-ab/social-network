import React from 'react';
import styles from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { MessagesPageType} from './../../redux/state';

type DialogsPropsType ={
    messagesPage: MessagesPageType
}

function Dialogs(props: DialogsPropsType) {

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>
                {
                    props.messagesPage.dialogsData.map(
                        el => <DialogItem
                            name={el.name}
                            id={el.id}
                        />
                    )}

            </div>


            <div className={styles.messages}>
                {
                    props.messagesPage.messagesData.map(
                        el => <Message
                            message={el.message}
                        />
                    )}

            </div>
        </div>
    )
}

export default Dialogs;