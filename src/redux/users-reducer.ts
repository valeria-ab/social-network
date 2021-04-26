import {ActionTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

type UsersLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocationType
}


export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const initialState: UsersPageType = {
    users: [/*  {
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
          }*/],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionTypes):UsersPageType => {

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
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        default:
            return state
    }
}

//тайпсриптовая штучка аналогичная AddPostActionType,
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>


export const followAC = (userID: number) => ({
    type: FOLLOW,
    userID
}) as const

export const unfollowAC = (userID: number) => ({
    type: UNFOLLOW,
    userID
}) as const

export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
}) as const

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
}) as const
