import {combineReducers, createStore} from "redux";
import profileReducer from "../reducer/profile.reducer";
import sidBarReducer from "../reducer/sidBar.reducer";
import messageReducer from "../reducer/message.reducer";

const reducerPack = combineReducers({
    profilePage:profileReducer,
    sidBar:sidBarReducer,
    messagesPage:messageReducer})

export type  reducerPackType = ReturnType<typeof reducerPack>


const store = createStore(reducerPack)



export default store