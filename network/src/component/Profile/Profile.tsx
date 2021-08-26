import React from 'react' ;
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ContentProfile = () => {
    return (
        <div>
            <ProfileInfo img={'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'}/>

            <MyPosts/>
        </div>
    )
};


export default ContentProfile;