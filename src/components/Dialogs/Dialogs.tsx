import React from 'react';
import styles from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPropsType, MessagePropsType} from '../../redux/store';

type DialogsPropsType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
    newMessageBody: string
    onNewMessageChange: (messageBody: string) => void
    sendMessage: () => void
}

function Dialogs(props: DialogsPropsType) {

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>
                {
                   props.dialogsData.map(
                        el => <DialogItem
                            name={el.name}
                            id={el.id}
                        />
                    )}

            </div>


            <div className={styles.messages}>
                {
                    props.messagesData.map(
                        el => <Message
                            message={el.message}
                        />
                    )}

                <div>
      <textarea
          value={props.newMessageBody}
          placeholder={'Enter your message...'}
          onChange={(event) => {
              let messageBody = event.target.value
              props.onNewMessageChange(messageBody)
      }}
      >
      </textarea>
                    <button onClick={props.sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;