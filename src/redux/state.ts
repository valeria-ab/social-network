export type PostPropsType ={
    id: number
    postMessage: string
    likesCount: number
}
export type MessagePropsType ={
    id: number
    message: string
}
export type DialogPropsType ={
    id: number
    name: string
}

export type ProfilePageType = {
    postsData: Array<PostPropsType>
}
export type MessagesPageType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
}

export type StatePropsType ={
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
let state:StatePropsType = {
    profilePage: {
        postsData : [
            {id: 1, postMessage: "Hi! It's my first post", likesCount: 3},
            {id: 2, postMessage: "Yo!", likesCount: 12}
        ]},
    messagesPage: {
        dialogsData : [
            {id: 1, name: "Саша"},
            {id: 2, name: "Света"},
            {id: 3, name: "Надя"},
            {id: 4, name: "Коля"}
        ],
        messagesData : [
            {id: 1, message: "Дай в долг!"},
            {id: 2, message: "Я набухалась"},
            {id: 3, message: "Плету ковёр..."},
            {id: 4, message: "Готовлю хрючево.."}
        ]}
}

export default state;