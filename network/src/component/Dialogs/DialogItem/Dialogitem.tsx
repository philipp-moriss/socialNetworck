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
    return <div  >
        <NavLink className={style.dialog } to={path}>
            <div>
                <img className={style.dialogsImg} alt={"imgProfile"} src={props.img}/>
            </div>
            {props.name}
        </NavLink>
    </div>
}



export default DialogItem;
