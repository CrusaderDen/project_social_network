import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

export const store = createStore(rootReducer)