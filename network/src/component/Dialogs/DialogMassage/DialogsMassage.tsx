import React from "react";
import style from './../Dialogs.module.css';



type MessagePropsType = {
    message: string;
    yourmesseges:boolean
}




function Message(props: MessagePropsType) {
    return (<div className={props.yourmesseges ? style.messageYour:style.hisMesseges}><div className={style.message}>{props.message}</div></div>)}


export default Message;
