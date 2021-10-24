import {ActionTypes, AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AxiosResponse} from "axios";
import { PostType, ProfilePhotosType, ProfileResponseType } from "../types/types";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'



//тайпсриптовая штучка аналогичная type AddPostActionType = { type: 'ADD-POST'}
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
export type AddPostActionType = ReturnType<typeof AddPostActionCreator>
export type SetUserProfileACActionType = ReturnType<typeof setUserProfile>
export type SetUserStatusActionType = ReturnType<typeof setUserStatus>



const initialState = {
    profile: null as ProfileResponseType | null, 
    postsData: [
        {id: 1, postMessage: 'Hi! It\'s my first post', likesCount: 3},
        {id: 2, postMessage: 'Yo!', likesCount: 12}
    ] as Array<PostType>,
    isAuth: false,
    status: ''
}

export type ProfilePageType = typeof initialState;

const profileReducer = (state = initialState, action: any): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                postMessage: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        default:
            return state
    }
}


export const AddPostActionCreator = (newPostText: string) => ({
    type: ADD_POST, newPostText
}) as const

const setUserProfile = (profile: ProfileResponseType) => ({
    type: SET_USER_PROFILE,
    profile
}) as const

const setUserStatus = (status: string) => ({
    type: SET_USER_STATUS,
    status
}) as const

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getUserProfile = (userId: number): ThunkType =>
    (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {

        profileAPI.getProfile(userId)
            .then((response: AxiosResponse<ProfileResponseType>) => {
                dispatch(setUserProfile(response.data))

            })
    }

export const getUserStatus = (userId: number): ThunkType =>
    (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
        profileAPI.getStatus(userId)
            .then((response: AxiosResponse<any>) => {
                dispatch(setUserStatus(response.data))
            })
    }

export const updateUserStatus = (status: string): ThunkType =>

    (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
        profileAPI.updateStatus(status)
            .then((response: AxiosResponse<ProfileResponseType>) => {

                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }


export default profileReducer;