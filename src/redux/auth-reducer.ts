import {Dispatch} from "redux";
import {ActionTypes, AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {AxiosResponse} from "axios";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export type initialAuthState = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>

type AuthResponseData = {
    id: number
    email: string
    login: string
}

type AuthResponse = {
    data: AuthResponseData
    resultCode: number
    messages: Array<string>
}

 const initialState: initialAuthState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action: ActionTypes):initialAuthState => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

const setAuthUserData = (userId:number, email:string, login:string, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
}) as const

export const getAuthUserData = () => (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {

    authAPI.me().then((response: AxiosResponse<AuthResponse>) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {

    authAPI.login(email, password, rememberMe).then((response: AxiosResponse<AuthResponse>) => {
        if (response.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            let action = stopSubmit("login", {_error: message})
            dispatch(action)
        }
    })
}

export const logout = () => (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {

    authAPI.logout().then((response: AxiosResponse<AuthResponse>) => {
        if (response.data.resultCode === 0) {
            console.log("dispatch(setAuthUserData(null, null, null, false))")
        }
    })
}

export default authReducer;