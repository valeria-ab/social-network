import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer, {
    AddPostActionType,
    ProfilePageType,
    setUserProfileACActionType, setUserStatusActionType
} from "./profile-reducer";
import dialogsReducer, {
    DialogsPageType,
    SendMessageActionType
} from "./dialogs-reducer";
import { initialUsersState, UsersPageActionTypes, usersReducer } from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer, {initialAuthState, SetAuthUserDataActionType} from "./auth-reducer";
import { FormAction, reducer as formReducer } from "redux-form";

export type  ActionTypes = AddPostActionType  |
    SendMessageActionType   | UsersPageActionTypes | setUserProfileACActionType | SetAuthUserDataActionType |
    setUserStatusActionType | FormAction 


export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage:initialUsersState
    auth: initialAuthState
}

//редаксовская ф-я смешивающая редюсеры
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})




//typeof rootReducer - это типизация функции, а ф-я что-то возвращает; и мы говорим дай мне возвращаемый тип
export type AppStateType = ReturnType<typeof rootReducer>

//export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

//автоматически createStore создаёт внутри себя стэйт у которого есть свойства описанные в reducers
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))




