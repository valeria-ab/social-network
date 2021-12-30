import { appReducer, InitialAppStateType } from "./app-reducer";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Action,
} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import profileReducer, { ProfilePageType } from "./profile-reducer";
import dialogsReducer, {
  DialogsPageType,
  SendMessageActionType,
} from "./dialogs-reducer";
import { InitialUsersState, usersReducer } from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer, { initialAuthState } from "./auth-reducer";
import { FormAction, reducer as formReducer } from "redux-form";

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;

export type StatePropsType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  usersPage: InitialUsersState;
  auth: initialAuthState;
  app: InitialAppStateType;
};

//редаксовская ф-я смешивающая редюсеры
const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

//typeof rootReducer - это типизация функции, а ф-я что-то возвращает; и мы говорим дай мне возвращаемый тип
export type AppStateType = ReturnType<typeof rootReducer>;

//export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
