import React from 'react' ;
import MyPosts  from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { profilePageType} from "../../redux/state/state";



type ProfilePostType = {
    data :  profilePageType;
    dispatch: (action:any)=>void;
}

const ContentProfile = (props:ProfilePostType) => {


    return (
        <div>
            <ProfileInfo img={'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'}/>

            <MyPosts Data={props.data} dispatch={props.dispatch}/>
        </div>
    )
};


export default ContentProfile;