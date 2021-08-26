import React from "react";
import {NavLink} from "react-router-dom";
import style from './Dialogs.module.css';


type DialogPropsType = {
    name: string;
    id: number;
}

type MessagePropsType = {
    message: string;
}

type dialogsDataType = {
    id: number;
    name: string;
}

type messageDataType = {
    id : number;
    message: string;
}


function DialogItem(props: DialogPropsType) {
    const path = `/dialogs/${props.id}`
    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


function Message(props: MessagePropsType) {
    return (<div className={style.message}>{props.message}</div>)
}

function Dialogs() {


    let dialogsData: Array<dialogsDataType> = [
        {id: 1, name: 'Philipp'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Kirill'},
        {id: 4, name: 'Anya'},
        {id: 5, name: 'Danila'},
    ]

    let massagesData : Array<messageDataType> = [
        {id: 1, message: "hi"},
        {id: 2, message: "What's up ?"},
        {id: 3, message: "broooooooooooo"},
        {id: 4, message: "brroooo, what you do ?"},
        {id: 5, message: "i love your"},
    ]

    return (<div className={style.dialogs}>
        <div className={style.dialogsItems}>
            {dialogsData.map((d)=>{
                return <DialogItem key={d.id} name={d.name} id={d.id}/>
            })}
        </div>
        <div className={style.messages}>
            {massagesData.map((m)=>{
                return <Message key={m.id} message={m.message}/>
            })}
        </div>
    </div>)
}

export default Dialogs;
