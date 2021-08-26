import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

type postDataType = {
    id: number;
    title: string;
    img: string;
    value: number;
}

function MyPosts() {

    let postData: Array<postDataType> = [
        {
            id: 1, title: "my first posts",
            value: 11,
            img: "https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651",
        },
        {
            id: 2, title: "my to",
            value: 23,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyhjuXjpN5uFiBSWPBOwkKbdCTmGD34EvR1TkdG17jTfK3km8K1CMmrbEZ7__tOrt-PU&usqp=CAU",
        },
    ]

    return (
        <>
            <div><h3 className={style.itemTitle}>My post</h3>
                <div>
                    <div className={style.item}>
                        <div><textarea className={style.itemTextArea}></textarea></div>
                        <div>
                            <button className={style.itemButton}>addPost</button>
                        </div>
                    </div>
                    {postData.map((p) => {

                        return (
                            <div key={p.id} className={style.itemPost}>
                                <Post title={p.title} img={p.img} value={p.value}/>
                            </div>)

                    })}
                </div>
            </div>


        </>)
}


export default MyPosts;