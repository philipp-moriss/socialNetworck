import React from 'react';

import {addpostAC, profilePageType, updatePostTextAC} from "../../../redux/reducer/profile.reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateRootType} from "../../../redux/store/store";
import {Dispatch} from "redux";

type MapStateToPropsType= {
    Data:profilePageType
}

type MapDispatchToProps = {
    addPost : () =>void
    updatePostText : (text: string | undefined) => void
}

let mapStateToProps = (state:StateRootType)=>{
    return{
        Data : state.profilePage
    }
}
let mapDispatchToProps = (dispatch:Dispatch)=>{
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
const MyPostsContainer = connect<MapStateToPropsType,MapDispatchToProps,{},StateRootType>(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;