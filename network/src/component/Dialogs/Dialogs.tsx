import React, {KeyboardEvent} from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./DialogMassage/DialogsMassage";
import ButtonMaster from "../ButtonMaster/ButtonMaster";
import {dialogsDataType, messageDataType} from "../../redux/reducer/message.reducer";


type Dialogpropstype = {
    messagesPage: { messagesData: Array<messageDataType>, newMessageText: string, dialogsData: Array<dialogsDataType>, }
    // state: { messagesData: Array<messageDataType>, newMessageText: string, dialogsData: Array<dialogsDataType>, }
    addMessage: () => void;
    updateTextDialogs: (text: string | undefined) => void;
    isAuth: boolean | null
}


function Dialogs(props: Dialogpropstype) {
    //destructuring
    const {dialogsData, messagesData} = props.messagesPage
    const dialog = dialogsData.map(d => <DialogItem key={d.id} img={d.img} name={d.name} id={d.id}/>);
    const message = messagesData.map(m => <Message key={m.id} yourmesseges={m.yourmesseges} message={m.message}/>);
    const refForArea: any = React.createRef();
    const addMessage = () => {
        props.addMessage()
    }
    const onChangeTextHandler = () => {
        let text = refForArea.current?.value
        props.updateTextDialogs(text)
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === "Enter" && e.charCode===13){
            props.addMessage()
        }
    }
    return (<div className={style.dialogs}>
        <div className={style.dialogsItems}>
            {dialog}
        </div>
        <div className={style.messages}>
            {message}
            <div>
                <textarea ref={refForArea}
                          value={props.messagesPage.newMessageText}
                          onChange={onChangeTextHandler}
                          onKeyPress={onKeyPressHandler}
                          className={style.itemTextArea}/>
                <ButtonMaster onClickMaster={addMessage} name={"addMessege"}/>
            </div>
        </div>
    </div>)
}

export default Dialogs;
