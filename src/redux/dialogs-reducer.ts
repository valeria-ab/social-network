import {ActionTypes} from "./redux-store";


export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

//или type DialogsPageType = typeof initialState и не придётся писать всё это ручками
/*export type DialogsPageType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
    newMessageBody: string
}*/


export type DialogsPageType = typeof initialState

//тайпсриптовая штучка аналогичная AddPostActionType,
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
export type SendMessageActionType = ReturnType<typeof sendMessage>


export const sendMessage = (newMessageBody: string) => ({
    type: 'SEND-MESSAGE', newMessageBody
}) as const

const initialState = {
    dialogsData: [
        {id: 1, name: 'Саша'},
        {id: 2, name: 'Света'},
        {id: 3, name: 'Полина'},
        {id: 4, name: 'Brad'}
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: 'Я разбогател!'},
        {id: 2, message: 'Я набухалась'},
        {id: 3, message: 'Диди, тип ти!'},
        {id: 4, message: 'Frogs say: "ribit, ribit" '}
    ] as Array<MessageType>,
    isAuth: false
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    let stateCopy;

    switch (action.type) {
        case   'SEND-MESSAGE':
            let newMessage: MessageType = {
                id: 5,
                message: action.newMessageBody,
            }
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }

            return stateCopy;

        default:
            return state;
    }
}
export default dialogsReducer;