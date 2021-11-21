import { Dispatch } from "redux";
import { ActionTypes, AppStateType } from "./redux-store";
import { authAPI } from "../api/api";
import { AxiosResponse } from "axios";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
//export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

const authReducer = (state = initialState, action: any): initialAuthState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData =
  () =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };

export const login =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    const response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      // @ts-ignore
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      let action = stopSubmit("login", { _error: message });
      dispatch(action);
    }
  };

export const logout =
  () =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
      console.log(dispatch(setAuthUserData(null, null, null, false)));
    }
  };

export default authReducer;

export type initialAuthState = typeof initialState;
