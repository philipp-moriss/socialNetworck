import React from "react";
import style from "./ButtonMaster.module.css"

type ButtonMasterPropsType = {
    onClickMaster : (text?:string|undefined)=> void;
    name:string;
}

function ButtonMaster (props:ButtonMasterPropsType){
    return (<button onClick={()=>props.onClickMaster()} className={style.itemButton}>{props.name}</button>)
}

export default ButtonMaster;