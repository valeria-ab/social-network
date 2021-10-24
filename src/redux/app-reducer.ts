import { getAuthUserData } from './auth-reducer';
import { Dispatch } from "redux";
import { ActionTypes, AppStateType } from "./redux-store";
import { authAPI } from "../api/api";
import { AxiosResponse } from "axios";
import { stopSubmit } from "redux-form";

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';



const initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action: any): initialAppState => {
    switch (action.type) {
        case INITIALIZED_SUCCSESS:

            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCSESS,

}
export const initializedSuccess = (): initializedSuccessActionType => ({ type: INITIALIZED_SUCCSESS });


export const initializeApp = () => (dispatch: Dispatch<any>, getState: () => AppStateType) => {

    const promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })


}


export type initialAppState = typeof initialState
