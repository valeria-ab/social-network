import {ActionTypes, DialogsPageType, MessagePropsType } from './state';

//тайпсриптовая штучка аналогичная AddPostActionType,
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
export type UpdateNewMessageBodyTextActionType = ReturnType<typeof UpdateNewMessageBodyActionCreator>
export type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>


export const UpdateNewMessageBodyActionCreator = (messageBody: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessageBody: messageBody
}) as const

export const SendMessageActionCreator = () => ({
    type: 'SEND-MESSAGE'
}) as const



const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newMessageBody
            return state;

        case   'SEND-MESSAGE':
            let newMessage: MessagePropsType = {
                id: 5,
                message: state.newMessageBody,
            }
            state.messagesData.push(newMessage)
            state.newMessageBody = ''
            return state;

        default:
            return state;
    }
}
export default dialogsReducer;