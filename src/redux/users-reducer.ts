import { UserType } from "./../types/types";
import { AppStateType, BaseThunkType, InferActionsTypes } from "./redux-store";
import { usersAPI } from "../api/api";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { updateObjectInArray } from "../utils/object-helpers";

export type InitialUsersState = typeof initialState;
const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array of users IDs
};

export const actions = {
  followSuccess: (userId: number) =>
    ({ type: "SN/USERS/FOLLOW", userId } as const),
  unfollowSuccess: (userId: number) =>
    ({ type: "SN/USERS/UNFOLLOW", userId } as const),
  setUsers: (users: Array<UserType>) =>
    ({ type: "SN/USERS/SET_USERS", users } as const),
  setCurrentPage: (currentPage: number) =>
    ({ type: "SN/USERS/SET_CURRENT_PAGE", currentPage } as const),
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: "SN/USERS/SET_TOTAL_USERS_COUNT",
      count: totalUsersCount,
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: "SN/USERS/TOGGLE_IS_FETCHING",
      isFetching,
    } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",
      isFetching,
      userId,
    } as const),
};
export const usersReducer = (
  state = initialState,
  action: any
): InitialUsersState => {
  switch (action.type) {
    case "SN/USERS/FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {
          followed: true,
        }),
      };
    case "SN/USERS/UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {
          followed: false,
        }),
      };
    case "SN/USERS/SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SN/USERS/SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SN/USERS/SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case "SN/USERS/TOGGLE_IS_FETCHING": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

// export type FollowSuccessActionType = ReturnType<typeof followSuccess>;
// export type UnfollowSuccessActionType = ReturnType<typeof unfollowSuccess>;
// export type SetUsersActionType = ReturnType<typeof setUsers>;
// export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;
// export type SetTotalUsersCountActionType = ReturnType<
//   typeof setTotalUsersCount
// >;
// export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;
// export type ToggleFollowingProgressActionType = ReturnType<
//   typeof toggleFollowingProgress
// >;

// export type UsersPageActionTypes =
//   | FollowSuccessActionType
//   | UnfollowSuccessActionType
//   | SetUsersActionType
//   | SetCurrentPageActionType
//   | SetTotalUsersCountActionType
//   | ToggleIsFetchingActionType
//   | ToggleFollowingProgressActionType;

// export const followSuccess = (userID: number) =>
//   ({ type: FOLLOW, userID } as const);
// export const unfollowSuccess = (userID: number) =>
//   ({ type: UNFOLLOW, userID } as const);
// export const setUsers = (users: Array<UserType>) =>
//   ({ type: SET_USERS, users } as const);
// export const setCurrentPage = (currentPage: number) =>
//   ({ type: SET_CURRENT_PAGE, currentPage } as const);
// export const setTotalUsersCount = (totalUsersCount: number) =>
//   ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } as const);
// export const toggleIsFetching = (isFetching: boolean) =>
//   ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
// export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
//   ({
//     type: TOGGLE_IS_FOLLOWING_PROGRESS,
//     isFetching,
//     userId,
//   } as const);

//type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;

export const requestUsers = (
  requestedPage: number,
  pageSize: number
): ThunkType => {
  return async (
    dispatch: Dispatch<ActionsTypes>,
    getState: () => AppStateType
  ) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(requestedPage));

    const data = await usersAPI.getUsers(requestedPage, pageSize);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);

  if (data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (
    dispatch: Dispatch<ActionsTypes>,
    getState: () => AppStateType
  ) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUser.bind(usersAPI),
      actions.followSuccess
    );
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (
    dispatch: Dispatch<ActionsTypes>,
    getState: () => AppStateType
  ) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(usersAPI),
      actions.unfollowSuccess
    );
  };
};

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
