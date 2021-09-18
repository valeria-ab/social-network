import {ActionTypes, AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AxiosResponse} from "axios";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

type ProfilePhotosType = {
    small: string
    large: string
}

type ProfileContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

export type ProfileResponseType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType

}

export type ProfilePageType = {
    profile: null | ProfileResponseType
    postsData: Array<PostPropsType>
    newPostText: string
    isAuth: boolean
}
export type PostPropsType = {
    id: number
    postMessage: string
    likesCount: number
}

//тайпсриптовая штучка аналогичная type AddPostActionType = { type: 'ADD-POST'}
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
export type AddPostActionType = ReturnType<typeof AddPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>
export type setUserProfileACActionType = ReturnType<typeof setUserProfile>

type ProfileResponse = {

}


const initialState:ProfilePageType = {
    profile: null,
    postsData: [
        {id: 1, postMessage: 'Hi! It\'s my first post', likesCount: 3},
        {id: 2, postMessage: 'Yo!', likesCount: 12}
    ],
    newPostText: '',
    isAuth: false
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostPropsType = {
                id: 3,
                postMessage: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.newPostText
            }
            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state
    }
}


export const AddPostActionCreator = () => ({
    type: ADD_POST
}) as const


export const UpdateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: text
}) as const

 const setUserProfile = (profile: ProfileResponseType) => ({
    type: SET_USER_PROFILE,
    profile
}) as const

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getUserProfile = (userId: string): ThunkType =>
    (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {

        profileAPI.getProfile(userId)
            .then((response: AxiosResponse<ProfileResponseType>) => {
                dispatch(setUserProfile(response.data))

            })
    }


export default profileReducer;