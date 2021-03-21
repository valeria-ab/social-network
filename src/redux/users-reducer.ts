import {ActionTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


export type UsersPageType = typeof initialState


//тайпсриптовая штучка аналогичная AddPostActionType,
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
export type FollowActionType = ReturnType<typeof FollowActionCreator>
export type UnfollowActionType = ReturnType<typeof UnfollowActionCreator>
export type SetUsersActionType = ReturnType<typeof setUsersActionCreator>


export const FollowActionCreator = (userID: number) => ({
    type: FOLLOW,
    userID
}) as const

export const UnfollowActionCreator = (userID: number) => ({
    type: UNFOLLOW,
    userID
}) as const

export const setUsersActionCreator = (users: []) => ({
    type: SET_USERS,
    users
}) as const

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://argumenti.ru/images/arhnews/583332.jpg',
            followed: true,
            fullName: 'Dmitry Nagiev',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1875669/pub_5cfc1492babd4000b092d023_5cfc160822f0d900afbfcac5/scale_1200',
            followed: false,
            fullName: 'Larisa Guzeeva',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://bykvu.com/wp-content/uploads/2015/06/01/e0173d8973a213a541f7a730d3ba3e85-1184x1100.jpg',
            followed: false,
            fullName: 'Vladimir Zhirinovsky',
            status: 'I am a real boss',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionTypes) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u

                })
            }
           return
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u

                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}


export default usersReducer;