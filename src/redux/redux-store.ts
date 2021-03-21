import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {
    DialogsPageType,
    SendMessageActionType,
    UpdateNewMessageBodyTextActionType
} from "./dialogs-reducer";
import usersReducer, {FollowActionType, SetUsersActionType, UnfollowActionType, UsersPageType} from "./users-reducer";

export type  ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyTextActionType |
    SendMessageActionType | FollowActionType | UnfollowActionType | SetUsersActionType


export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}

//редаксовская ф-я смешивающая редюсеры
const rootReducer = combineReducers({
   profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})




//typeof rootReducer - это типизация функции, а ф-я что-то возвращает; и мы говорим дай мне возвращаемый тип
export type AppStateType = ReturnType<typeof rootReducer>

//автоматически createStore создаёт внутри себя стэйт у которого есть свойства описанные в reducers
export const store = createStore(rootReducer)


