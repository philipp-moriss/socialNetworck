import React from 'react';
import style from "./Post.module.css";


type PostTypeProps = {
    title : string;
    type : string;
    img : string;

}

function  Post ( props : PostTypeProps) {
    return (
        <div className={style.item}>
            <img src={props.img}/>
            {props.title}
            <div>
                <span>{props.type}</span>
            </div>
        </div>
    )
}

export default Post;