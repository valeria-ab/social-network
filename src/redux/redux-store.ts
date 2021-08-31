import {combineReducers, createStore} from "redux";
import profileReducer, {
    AddPostActionType,
    ProfilePageType,
    setUserProfileACActionType,
    UpdateNewPostTextActionType
} from "./profile-reducer";
import dialogsReducer, {
    DialogsPageType,
    SendMessageActionType,
    UpdateNewMessageBodyTextActionType
} from "./dialogs-reducer";
import {
    FollowActionType, initialUsersState, setCurrentPageActionType, setTotalUsersCountActionType,
    SetUsersActionType, toggleFollowingProgressActionType, toggleIsFetchingActionType,
    UnfollowActionType, usersReducer
} from "./users-reducer";
import authReducer from "./auth-reducer";
import sidebarReducer from "./sidebar-reducer";

export type  ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyTextActionType |
    SendMessageActionType | FollowActionType | UnfollowActionType | SetUsersActionType | setCurrentPageActionType |
    setTotalUsersCountActionType | toggleIsFetchingActionType | toggleFollowingProgressActionType | setUserProfileACActionType


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
export const store = createStore(rootReducer)




