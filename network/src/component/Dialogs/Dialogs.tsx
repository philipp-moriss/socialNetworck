import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./DialogMassage/DialogsMassage";
import {
    addMassageAC,
    dialogsDataType,
    KingActionType,
    messageDataType,
    updateMassageTextAC
} from "../../redux/state/state";
import ButtonMaster from "../ButtonMaster/ButtonMaster";






type Dialogpropstype = {
    state: { messagesData: Array<messageDataType>,newMessageText:string ,dialogsData: Array<dialogsDataType>, }
    dispatch: (action:KingActionType)=>void

}



function Dialogs(props:Dialogpropstype) {
    //destructuring
    const {dialogsData,messagesData} = props.state
    const {dispatch} = props

    const dialog = dialogsData.map(d=><DialogItem key={d.id} img={d.img} name={d.name} id={d.id}/>);
    const message = messagesData.map(m=><Message  key={m.id} yourmesseges={m.yourmesseges} message={m.message}/>);
    const refForArea: any = React.createRef();
    const addMessage = () => {
        dispatch(addMassageAC())
        dispatch(updateMassageTextAC(''))
    }
    const onChangeTextHandler = () => {
        let text = refForArea.current?.value
        dispatch(updateMassageTextAC(text?text:''))
    }
    return (<div className={style.dialogs}>
        <div className={style.dialogsItems}>
            {dialog}
        </div>
        <div className={style.messages}>
            {message}
            <div>
                <textarea ref={refForArea}
                          value={props.state.newMessageText}
                          onChange={onChangeTextHandler}
                          className={style.itemTextArea}/>
                <ButtonMaster onClickMaster={addMessage} name={"addMessege"}/>
            </div>
        </div>
    </div>)
}

export default Dialogs;
