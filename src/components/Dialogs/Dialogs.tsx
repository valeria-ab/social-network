import React from 'react';
import styles from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (messageBody: string) => void
    sendMessage: (newMessageBody: string) => void
}

const maxLength10 = maxLengthCreator(10)

function Dialogs(props: DialogsPropsType) {

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

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
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={"newMessageBody"}
                   validate={[requiredField, maxLength10]}
                   placeholder={"Enter your message..."}/>
            <button>Send</button>
        </form>

    )
}

// @ts-ignore
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;