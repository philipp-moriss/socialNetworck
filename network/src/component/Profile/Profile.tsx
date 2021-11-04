import React from 'react' ;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUser} from "../../redux/reducer/profile.reducer";

type ContentProfileProps = {
    profile: ProfileUser | null;
    status:string;
    updateStatus:(status:string)=>void;
}



const ContentProfile = (props:ContentProfileProps) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>
    )
};


export default ContentProfile;