import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import ButtonMaster from "../../ButtonMaster/ButtonMaster";
import { profilePageType } from '../../../redux/store/state';




export type MyPostType = {
    Data:profilePageType;
    addPost:()=>void;
    updatePostText:(text:string | undefined)=>void;
}

function MyPosts(props:MyPostType) {

    // distructorization
    const{ Data,}= props

    const post = Data.postData.map((p) => (<div key={p.id} className={style.itemPost}>
        <Post title={p.title} img={p.img} value={p.value}/>
    </div>))
    let newPostElement = React.createRef<HTMLTextAreaElement >();
    const addPost = ()=>{
        props.addPost()
    }
    const onPostChange = () =>{
        let text = newPostElement.current?.value
        props.updatePostText(text)
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