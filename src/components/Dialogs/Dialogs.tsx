import React from 'react';
import styles from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {SendMessageActionCreator, UpdateNewMessageBodyActionCreator} from './../../redux/dialogs-reducer';
import {StoreType} from '../../redux/state';

type DialogsPropsType = {
   store: StoreType
}

function Dialogs(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>
                {
                    state.dialogsData.map(
                        el => <DialogItem
                            name={el.name}
                            id={el.id}
                        />
                    )}

            </div>


            <div className={styles.messages}>
                {
                    state.messagesData.map(
                        el => <Message
                            message={el.message}
                        />
                    )}

                <div>
      <textarea
          value={state.newMessageBody}
          placeholder={'Enter your message...'}
          onChange={(event) => {
              let messageBody = event.target.value
              props.store.dispatch(UpdateNewMessageBodyActionCreator(messageBody))
      }}
      >
      </textarea>
                    <button onClick={() => props.store.dispatch(SendMessageActionCreator())}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;