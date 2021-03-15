import React from 'react';
import {StoreType} from '../../redux/store';
import Dialogs from "./Dialogs";
import {SendMessageActionCreator, UpdateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

type DialogsContainerPropsType = {
   store: StoreType
}

function DialogsContainer(props: DialogsContainerPropsType) {
    const state = props.store.getState()

    const updateNewMessageBody = (messageBody:string) => {
        props.store.dispatch(UpdateNewMessageBodyActionCreator(messageBody))
    }

    const sendMessage = () => props.store.dispatch(SendMessageActionCreator())

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

export default DialogsContainer;