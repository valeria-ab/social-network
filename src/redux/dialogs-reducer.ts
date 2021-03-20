import {ActionTypes} from './store';

export type DialogPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}

//или type DialogsPageType = type of initialState и не придётся писать всё это ручками
export type DialogsPageType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
    newMessageBody: string
}


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

const initialState = {
    dialogsData: [
        {id: 1, name: 'Саша'},
        {id: 2, name: 'Света'},
        {id: 3, name: 'Надя'},
        {id: 4, name: 'Коля'}
    ],
    messagesData: [
        {id: 1, message: 'Дай в долг!'},
        {id: 2, message: 'Я набухалась'},
        {id: 3, message: 'Плету ковёр...'},
        {id: 4, message: 'Люблю хрючево..'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes):DialogsPageType => {
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