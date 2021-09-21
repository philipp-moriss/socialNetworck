import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addpostAC, profilePageType, updatePostTextAC} from "../../../redux/state/state";
import ButtonMaster from "../../ButtonMaster/ButtonMaster";



export type MyPostType = {
    Data:profilePageType;
    dispatch: (action:any)=>void;
}

function MyPosts(props:MyPostType) {

    // distructorization
    const{ Data,dispatch }= props

    const post = Data.postData.map((p) => (<div key={p.id} className={style.itemPost}>
        <Post title={p.title} img={p.img} value={p.value}/>
    </div>))
    let newPostElement = React.createRef<HTMLTextAreaElement >();
    const addPost = ()=>{
        dispatch(addpostAC())
        dispatch(updatePostTextAC(''))
    }
    const onPostChange = () =>{
        let text = newPostElement.current?.value
        dispatch(updatePostTextAC(text?text:''))
    }
    return (
        <>
            <div><h3 className={style.itemTitle}>My post</h3>
                <div>
                    <div className={style.item}>
                        <div><textarea ref={newPostElement}
                                       onChange={onPostChange}
                                       value={props.Data.newPostText}
                                       className={style.itemTextArea}/></div>
                        <div>
                            <ButtonMaster onClickMaster={addPost} name={"addPost"}/>
                        </div>
                    </div>
                    {post}
                </div>
            </div>


        </>)
}


export default MyPosts;