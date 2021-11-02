import React from "react";
import style from "./ProfileInfo.module.css";
import {ProfileUser} from "../../../redux/reducer/profile.reducer";
import Preloader from "../../common/Preoalder/Preloader";
import ProfileStatus from "../ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileUser | null
}

function ProfileInfo(props:ProfileInfoProps) {
    if (!props.profile){
        return <Preloader/>
    }
    let img = props.profile?.photos.small ? props.profile?.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxqFQZe0mLljqYGMi6L5aZECaUXoQ0lBm6g&usqp=CAU"
    return (<>
        <div className={style.item}>
            <img alt={"profilePhoto"} src={img} className={style.imgProfile}/>
            <ProfileStatus status={"hello bro"}/>
            <h3>contacts</h3>
            <span>{props.profile?.contacts.vk}</span>
            <span>{props.profile?.contacts.github}</span>
            <span>{props.profile?.contacts.youtube}</span>
            <h3>about me</h3>
            <h4>{props.profile.fullName}</h4>
            <p>{props.profile?.aboutMe}</p>
        </div>
    </>)
}


export default ProfileInfo