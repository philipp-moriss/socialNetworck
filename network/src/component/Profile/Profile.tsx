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
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
};


export default ContentProfile;