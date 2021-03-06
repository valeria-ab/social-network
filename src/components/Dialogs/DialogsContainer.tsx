import React from 'react';
import Dialogs from "./Dialogs";
import {
    DialogsPageType,
    SendMessageActionCreator,
    UpdateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StatePropsType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (messageBody:string) => void
    sendMessage: () => void

}

const mapStateToProps = (state:StatePropsType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (messageBody:string) =>
                dispatch(UpdateNewMessageBodyActionCreator(messageBody)),
        sendMessage: () => dispatch(SendMessageActionCreator())

    }
}


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

