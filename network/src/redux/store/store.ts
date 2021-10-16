import {combineReducers, createStore, Store} from "redux";
import profileReducer from "../reducer/profile.reducer";
import sidBarReducer from "../reducer/sidBar.reducer";
import messageReducer from "../reducer/message.reducer";
import UsersReducer from "../reducer/Users.reducer";


export type StateRootType = ReturnType<typeof reducerPack>


const reducerPack = combineReducers({
    profilePage:profileReducer,
    sidBar:sidBarReducer,
    messagesPage:messageReducer,
    UsersPage:UsersReducer,
})

export type  reducerPackType = ReturnType<typeof reducerPack>



const store: Store = createStore(reducerPack)



export default store