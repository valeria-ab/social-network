export type PostPropsType = {
    id: number
    postMessage: string
    likesCount: number
}
export type MessagePropsType = {
    id: number
    message: string
}
export type DialogPropsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    postsData: Array<PostPropsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
    newMessageBody: string
}

export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type AddPostActionType = {
    type: 'ADD-POST'
}

//тайпсриптовая штучка аналогичная AddPostActionType,
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>
type UpdateNewMessageBodyTextActionType = ReturnType<typeof UpdateNewMessageBodyActionCreator>
type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>



export type  ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyTextActionType |
    SendMessageActionType

export type StoreType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: () => void
   /* addPost: () => void
    updateNewPostText: (newPostText: string) => void*/
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, postMessage: 'Hi! It\'s my first post', likesCount: 3},
                {id: 2, postMessage: 'Yo!', likesCount: 12}
            ],
            newPostText: 'Что у Вас нового?'
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },

    //методы не меняющие стейт
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
        // Многоходовочка. Мы объявляем наверху пустую функцию  rerenderEntireTree,
        // чтобы избежать циклической зависимости с index.tsx. Мы создаём функцию
        // subscribe, чтобы закидывать в неё параметром функцию-перерисовку стэйта из index.tsx
    },

    //методы меняющие стейт

    dispatch(action: ActionTypes) {
        if (action.type === 'ADD-POST') {
            let newPost: PostPropsType = {
                id: 3,
                postMessage: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this._callSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage: MessagePropsType = {
                id: 5,
                message: this._state.dialogsPage.newMessageBody,
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber()

        }
    }
}

 export const AddPostActionCreator = ():AddPostActionType => ( {type: 'ADD-POST'})


export const UpdateNewPostTextActionCreator = (text: string) => ({
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: text
    }) as const

export const UpdateNewMessageBodyActionCreator = (messageBody: string) => ( {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessageBody: messageBody
}) as const

export const SendMessageActionCreator = () => ( {
    type: 'SEND-MESSAGE'
}) as const


export default store;