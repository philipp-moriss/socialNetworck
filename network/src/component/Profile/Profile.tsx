import React from 'react' ;
import MyPosts  from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postDataType, profilePageType} from "../../redux/state/state";



type ProfilePostType = {
    data :  profilePageType;
    addPost:()=>void;
    updateNewPostText:(newText:string)=>void
}

const ContentProfile = (props:ProfilePostType) => {


    return (
        <div>
            <ProfileInfo img={'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'}/>

            <MyPosts Data={props.data} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
        </div>
    )
};


export default ContentProfile;