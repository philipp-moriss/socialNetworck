import React from 'react' ;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { profilePageType} from "../../redux/store/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



type ProfilePostType = {
    data :  profilePageType;
    dispatch: (action:any)=>void;
}

const ContentProfile = (props:ProfilePostType) => {


    return (
        <div>
            <ProfileInfo img={'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'}/>

            <MyPostsContainer Data={props.data} dispatch={props.dispatch}/>
        </div>
    )
};


export default ContentProfile;