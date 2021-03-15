import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import { StoreType } from "./store";

//редаксовская ф-я смешивающая редьюсеры
const reducers = combineReducers({
   profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

//автоматически createStore создаёт внутри себя стэйт у которого есть свойства описанные в reducers
const store: StoreType = createStore(reducers)

export default store;