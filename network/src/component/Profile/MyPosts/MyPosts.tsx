import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    return (
        <>
            <div className={style.item}>My post
                <div>
                    <div className={style.item}>New post
                    </div>
                    <div>
                        <Post img={'https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651'} type = {'like'} title={'Post1'}/>
                    </div>
                    <div>
                        <Post img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyhjuXjpN5uFiBSWPBOwkKbdCTmGD34EvR1TkdG17jTfK3km8K1CMmrbEZ7__tOrt-PU&usqp=CAU'} type = {'like'}  title={'Post2'}/>
                    </div>
                </div>
            </div>


        </>)
}


export default MyPosts;