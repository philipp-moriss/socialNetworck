import React from "react";
import style from "./ProfileInfo.module.css";
import {ProfileUser} from "../../../redux/reducer/profile.reducer";
import Preloader from "../../common/Preoalder/Preloader";

type ProfileInfoProps = {
    img : string
    profile: ProfileUser | null
}

function ProfileInfo(props:ProfileInfoProps) {
    if (!props.profile){
        return <Preloader/>
    }
    return (<>
        <div><img alt={"banner"} className={style.back} src={props.img}/></div>
        <div className={style.item}>
            <img alt={"profilePhoto"} src={props.profile?.photos.small}/>
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