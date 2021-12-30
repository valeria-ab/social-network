import { AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AxiosResponse } from "axios";
import { PostType, ProfilePhotosType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { FormAction, stopSubmit } from "redux-form";

type ActionTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionTypes | FormAction>;

const initialState = {
  profile: null as ProfileType | null,
  posts: [
    { id: "1", postMessage: "Hi! It's my first post", likesCount: 3 },
    { id: "2", postMessage: "Yo!", likesCount: 12 },
  ] as Array<PostType>,
  isAuth: false,
  status: "",
};

export type ProfilePageType = typeof initialState;

export const actions = {
  addPostActionCreator: (newPostText: string) =>
    ({ type: "ADD-POST", newPostText } as const),
  setUserProfile: (profile: ProfileType) =>
    ({ type: "SET_USER_PROFILE", profile } as const),
  setStatus: (status: string) => ({ type: "SET_STATUS", status } as const),
  deletePost: (postId: number) => ({ type: "DELETE_POST", postId } as const),
  savePhotoSuccess: (photos: ProfilePhotosType) =>
    ({ type: "SAVE_PHOTO_SUCCESS", photos } as const),
};

const profileReducer = (
  state = initialState,
  action: ActionTypes
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: "3",
        postMessage: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case "DELETE_POST": {
      return {
        ...state,
        //@ts-ignore
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case "SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "SAVE_PHOTO_SUCCESS":
      return {
        ...state,
        //@ts-ignore
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

//type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;

export const getUserProfile =
  (userId: number): ThunkType =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    const response = await profileAPI.getProfile(userId);

    dispatch(actions.setUserProfile(response.data));
  };

export const getUserStatus =
  (userId: number): ThunkType =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(actions.setStatus(response.data));
  };

export const updateUserStatus =
  (status: string): ThunkType =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  };

export const savePhoto =
  (file: File): ThunkType =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(response.data.data.photos));
    }
  };
export const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
  
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
      if (userId != null) {
        //@ts-ignore
        dispatch(getUserProfile(userId));
      }  else {
         //@ts-ignore
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }))
      }
    }
  };

export default profileReducer;
