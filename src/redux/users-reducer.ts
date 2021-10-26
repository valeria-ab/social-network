import { UserType } from './../types/types';
import { ActionTypes, AppStateType } from "./redux-store";
import { usersAPI } from "../api/api";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



export type InitialUsersState = typeof initialState;
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users IDs
}


export const usersReducer = (state = initialState, action: any): InitialUsersState => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u

                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state
    }
}


export type FollowSuccessActionType = ReturnType<typeof followSuccess>
export type UnfollowSuccessActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

export type UsersPageActionTypes =
    FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType


export const followSuccess = (userID: number) => ({ type: FOLLOW, userID }) as const
export const unfollowSuccess = (userID: number) => ({ type: UNFOLLOW, userID }) as const
export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users }) as const
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage }) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }) as const
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching }) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }) as const


  

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const requestUsers = (requestedPage: number, pageSize: number): ThunkType => {

    return (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(requestedPage))

        usersAPI.getUsers(requestedPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            });
    }
}

export const follow = (userId: number): ThunkType => {

    return (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
        toggleFollowingProgress(true, userId)
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    follow(userId)
                }
                toggleFollowingProgress(false, userId)
            })
    }
}

export const unfollow = (userId: number): ThunkType => {

    return (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
        toggleFollowingProgress(true, userId)
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    unfollow(userId)
                }
                toggleFollowingProgress(false, userId)
            })
    }
}



