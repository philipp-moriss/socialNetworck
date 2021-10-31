import React from 'react' ;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUser} from "../../redux/reducer/profile.reducer";

type ContentProfileProps = {
    profile: ProfileUser | null
}



const ContentProfile = (props:ContentProfileProps) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} img={'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'}/>
            <MyPostsContainer/>
        </div>
    )
};


export default ContentProfile;