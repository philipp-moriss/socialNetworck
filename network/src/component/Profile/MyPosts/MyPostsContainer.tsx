import React from 'react';

import {addpostAC, updatePostTextAC} from "../../../redux/reducer/profile.reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../storeContext';




function MyPostsContainer() {



    return<StoreContext.Consumer>{
        (store)=>{
            const addPost = ()=>{
                store.dispatch(addpostAC())
                store.dispatch(updatePostTextAC(''))
            }
            const updatePostText = (text:string|undefined) =>{
                store.dispatch(updatePostTextAC(text?text:''))
            }
        return  (<MyPosts Data={store.getState().profilePage} addPost={addPost} updatePostText={updatePostText}  />)
    }}
    </StoreContext.Consumer>
}


export default MyPostsContainer;