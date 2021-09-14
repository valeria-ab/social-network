import {Dispatch} from "redux";
import {ActionTypes, AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {AxiosResponse} from "axios";

const SET_USER_DATA = 'SET_USER_DATA';

 type initialAuthState = {
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
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

const setAuthUserData = (userId:number, email:string, login:string) => ({
    type: SET_USER_DATA, data: {userId, email, login}
}) as const

export const getAuthUserData = () => (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {

    authAPI.me().then((response: AxiosResponse<AuthResponse>) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer;