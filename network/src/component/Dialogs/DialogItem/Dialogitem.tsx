import React from "react";
import {NavLink} from "react-router-dom";
import style from './../Dialogs.module.css';


type DialogPropsType = {
    name: string;
    id: number;
    img : string;
}



function DialogItem(props: DialogPropsType) {
    const path = `/dialogs/${props.id}`
    return <div >
        <NavLink className={style.dialog } to={path}><img src={props.img}/>{props.name}</NavLink>
    </div>
}



export default DialogItem;
