import React from 'react' ;
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const ContentProfile = () => {
    return (
        <div className={style.content}>
            <div className={style.siti}></div>
            <div className={style.item}>ava + content</div>
            <MyPosts/>
        </div>
    )
};


export default ContentProfile;