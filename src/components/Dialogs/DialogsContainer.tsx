import React from 'react';
import Dialogs from "./Dialogs";
import {
    DialogsPageType, sendMessage, updateNewMessageBody
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {StatePropsType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (messageBody:string) => void
    sendMessage: () => void

}

const mapStateToProps = (state:StatePropsType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.dialogsPage.isAuth
    }
}



export const DialogsContainer = connect(mapStateToProps,{
    updateNewMessageBody,
    sendMessage
})(Dialogs)

