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
export type MessagesPageType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
}

export type StatePropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

type AddPostActionType = {
    type: 'ADD-POST'
}

//тайпсриптовая штучка аналогичная AddPostActionType,
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>



export type  ActionTypes = AddPostActionType | UpdateNewPostTextActionType

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
        messagesPage: {
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
            ]
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
   /* addPost() {
        let newPost: PostPropsType = {
            id: 3,
            postMessage: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber()
    },*/

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
        }
    }
}

 export const AddPostActionCreator = ():AddPostActionType => ( {type: 'ADD-POST'})

export const UpdateNewPostTextActionCreator = (text: string) => ({
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: text
    }) as const


export default store;