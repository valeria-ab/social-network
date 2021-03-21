import profileReducer, {AddPostActionType,  UpdateNewPostTextActionType} from './profile-reducer'
import dialogsReducer, { SendMessageActionType, UpdateNewMessageBodyTextActionType} from './dialogs-reducer';

type PostPropsType = {
    id: number
    postMessage: string
    likesCount: number
}
type MessagePropsType = {
    id: number
    message: string
}
type DialogPropsType = {
    id: number
    name: string
}

type ProfilePageType = {
    postsData: Array<PostPropsType>
    newPostText: string
}
type DialogsPageType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
    newMessageBody: string
}

type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type  ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyTextActionType | SendMessageActionType

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
            newPostText: ''
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber()
    }
}



export default store;