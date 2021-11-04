import React from "react";
import style from "./ProfileInfo.module.css";
import {ProfileUser} from "../../../redux/reducer/profile.reducer";
import Preloader from "../../common/Preoalder/Preloader";
import ProfileStatus from "../ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileUser | null;
    status: string;
    updateStatus: (status: string) => void;
}

function ProfileInfo(props: ProfileInfoProps) {
    if (!props.profile) {
        return <Preloader/>
    }
    let img = props.profile?.photos.small ? props.profile?.photos.small :
        props.profile.userId === 19502 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxqFQZe0mLljqYGMi6L5aZECaUXoQ0lBm6g&usqp=CAU"
            : "https://i.pinimg.com/originals/a2/ec/c6/a2ecc63ed9e51495ead40e95d92ac9b3.jpg"

    return (<>
        <div className={style.item}>
            <img alt={"profilePhoto"} src={img} className={style.imgProfile}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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