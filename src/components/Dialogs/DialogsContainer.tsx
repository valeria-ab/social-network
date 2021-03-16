import React from 'react';
import Dialogs from "./Dialogs";
import {SendMessageActionCreator, UpdateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../StoreContext";



function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const updateNewMessageBody = (messageBody:string) => {
                        store.dispatch(UpdateNewMessageBodyActionCreator(messageBody))
                    }

                    const sendMessage = () => store.dispatch(SendMessageActionCreator())

                    return (
                        <Dialogs
                            messagesData={state.dialogsPage.messagesData}
                            dialogsData={state.dialogsPage.dialogsData}
                            newMessageBody={state.dialogsPage.newMessageBody}
                            onNewMessageChange={updateNewMessageBody}
                            sendMessage ={sendMessage}
                        />
                    )
                }
            }


        </StoreContext.Consumer>

    )
}

export default DialogsContainer;