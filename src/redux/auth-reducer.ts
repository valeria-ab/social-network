import { Dispatch } from "redux";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { authAPI, securityAPI } from "../api/api";
import { AxiosResponse } from "axios";
import { stopSubmit } from "redux-form";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null, //if null, than captcha is not required
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SET_USER_DATA",
      payload: { userId, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: "GET_CAPTCHA_URL_SUCCESS",
      payload: { captchaUrl },
    } as const),
};

const authReducer = (state = initialState, action: any): initialAuthState => {
  switch (action.type) {
    case "GET_CAPTCHA_URL_SUCCESS":
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// type SetAuthUserDataActionPayloadType = {
//   userId: number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean;
// };
// export type SetAuthUserDataActionType = {
//   type: typeof SET_USER_DATA;
//   payload: SetAuthUserDataActionPayloadType;
// };

export const getAuthUserData =
  () =>
  async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
  };

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      // @ts-ignore
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        // @ts-ignore
        dispatch(getCaptchaUrl());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      const action = stopSubmit("login", { _error: message });
      //@ts-ignore
      dispatch(action);
    }
  };

export const getCaptchaUrl =
  () =>
  async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    //@ts-ignore
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  };

export const logout =
  () =>
  async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
      console.log(dispatch(actions.setAuthUserData(null, null, null, false)));
    }
  };

export default authReducer;

export type initialAuthState = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
