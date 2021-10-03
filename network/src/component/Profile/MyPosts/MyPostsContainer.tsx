import React from 'react';

import {addpostAC, updatePostTextAC} from "../../../redux/reducer/profile.reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {reducerPackType} from "../../../redux/store/store";


let mapStateToProps = (state:reducerPackType)=>{
    return{
        Data : state.profilePage
    }
}
let mapDispatchToProps = (dispatch:any)=>{
    return {
        addPost:()=>{
            dispatch(addpostAC())
            dispatch(updatePostTextAC(''))
        },
        updatePostText:(text:string|undefined)=>{
            dispatch(updatePostTextAC(text?text:''))
        },
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;