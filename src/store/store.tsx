import { combineReducers,  createStore } from "redux";
import Addlogin from "./LoginAuth/loginauth.reducer";



const rootReducer = combineReducer({
    login: Addlogin,

}) 


export const store = createStore(rootReducer)