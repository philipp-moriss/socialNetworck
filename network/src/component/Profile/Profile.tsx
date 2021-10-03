import React from 'react' ;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const ContentProfile = () => {


    return (
        <div>
            <ProfileInfo img={'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'}/>
            <MyPostsContainer/>
        </div>
    )
};


export default ContentProfile;