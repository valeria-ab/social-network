import React from 'react';
import styles from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from "../../redux/dialogs-reducer";



type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (messageBody: string) => void
    sendMessage: () => void
}

function Dialogs(props: DialogsPropsType) {

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>
                {
                   props.dialogsPage.dialogsData.map(
                        el => <DialogItem
                            key={el.id}
                            name={el.name}
                            id={el.id}
                        />
                    )}

            </div>


            <div className={styles.messages}>
                {
                    props.dialogsPage.messagesData.map(
                        el => <Message
                            message={el.message}
                        />
                    )}

                <div>
      <textarea
          value={props.dialogsPage.newMessageBody}
          placeholder={'Enter your message...'}
          onChange={(event) => {
              let messageBody = event.target.value
              props.updateNewMessageBody(messageBody)
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