import React from 'react';
import style from "./Post.module.css";


type PostTypeProps = {
    title : string;
    img : string;
    value : number;

}

function  Post ( props : PostTypeProps) {
    const {img,title,value}=props;
    return (
        <div className={style.item}>
            <img alt={'profil'} src={img} className={style.imgPost}/>
            {title}
            <div>
                <span>{`like ${value}`}</span>
            </div>
        </div>
    )
}

export default Post;