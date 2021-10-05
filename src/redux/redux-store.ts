import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer, {
    AddPostActionType,
    ProfilePageType,
    setUserProfileACActionType, setUserStatusActionType,
    UpdateNewPostTextActionType
} from "./profile-reducer";
import dialogsReducer, {
    DialogsPageType,
    SendMessageActionType,
    UpdateNewMessageBodyTextActionType
} from "./dialogs-reducer";
import { initialUsersState, UsersPageActionTypes, usersReducer } from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer, {setAuthUserDataActionType} from "./auth-reducer";

export type  ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyTextActionType |
    SendMessageActionType  | UsersPageActionTypes | setUserProfileACActionType | setAuthUserDataActionType |
    setUserStatusActionType


export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage:initialUsersState
}

//редаксовская ф-я смешивающая редюсеры
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})




//typeof rootReducer - это типизация функции, а ф-я что-то возвращает; и мы говорим дай мне возвращаемый тип
export type AppStateType = ReturnType<typeof rootReducer>

//автоматически createStore создаёт внутри себя стэйт у которого есть свойства описанные в reducers
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))




