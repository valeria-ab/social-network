import React, {ComponentType} from 'react';
import Dialogs from "./Dialogs";
import {
    DialogsPageType, sendMessage, updateNewMessageBody
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {StatePropsType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (messageBody:string) => void
    sendMessage: () => void

}

const mapStateToProps = (state:StatePropsType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

/*const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps,{
    updateNewMessageBody,
    sendMessage
})(AuthRedirectComponent)*/




export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps,{
        updateNewMessageBody,
        sendMessage}),
    withAuthRedirect
)(Dialogs)