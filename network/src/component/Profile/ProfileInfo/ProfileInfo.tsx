import React from "react";
import style from "./ProfileInfo.module.css";

type ProfileInfoProps = {
    img : string
}

function ProfileInfo(props:ProfileInfoProps) {
    return (<>
        <div><img className={style.back} src={props.img}/></div>
        <div className={style.item}>ava + content</div>
    </>)
}


export default ProfileInfo