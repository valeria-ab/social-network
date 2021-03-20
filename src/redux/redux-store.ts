import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import { StoreType } from "./store";

//редаксовская ф-я смешивающая редюсеры
const rootReducer = combineReducers({
   profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

//typeof rootReducer - это типизация функции, а ф-я что-то возвращает; и мы говорим дай мне возвращаемый тип
export type AppStateType = ReturnType<typeof rootReducer>

//автоматически createStore создаёт внутри себя стэйт у которого есть свойства описанные в reducers
export const store = createStore(rootReducer)


