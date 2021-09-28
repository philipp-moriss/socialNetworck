import React from 'react';
import { profilePageType } from '../../../redux/store/state';
import {addpostAC, updatePostTextAC} from "../../../redux/reducer/profile.reducer";
import MyPosts from "./MyPosts";



export type MyPostContainerType = {
    Data:profilePageType;
    dispatch: (action:any)=>void;
}

function MyPostsContainer(props:MyPostContainerType) {

    // distructorization
    const{ Data,dispatch }= props

    const addPost = ()=>{
        dispatch(addpostAC())
        dispatch(updatePostTextAC(''))
    }
    const updatePostText = (text:string|undefined) =>{
        dispatch(updatePostTextAC(text?text:''))
    }
    return (<MyPosts Data={Data} addPost={addPost} updatePostText={updatePostText}  />)
}


export default MyPostsContainer;