

export type DialogsPageType = typeof initialState

export type SendMessageActionType = ReturnType<typeof sendMessage>


type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
const initialState = {
    dialogsData: [
        { id: 1, name: 'Саша' },
        { id: 2, name: 'Света' },
        { id: 3, name: 'Полина' },
        { id: 4, name: 'Brad' }
    ] as Array<DialogType>,
    messagesData: [
        { id: 1, message: 'Я разбогател!' },
        { id: 2, message: 'Я набухалась' },
        { id: 3, message: 'Диди, тип ти!' },
        { id: 4, message: 'Frogs say: "ribit, ribit" ' }
    ] as Array<MessageType>,
    isAuth: false
}

const dialogsReducer = (state: DialogsPageType = initialState, action: any): DialogsPageType => {
    let stateCopy;

    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
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


export const sendMessage = (newMessageBody: string) => ({
    type: 'SEND-MESSAGE', newMessageBody
}) as const