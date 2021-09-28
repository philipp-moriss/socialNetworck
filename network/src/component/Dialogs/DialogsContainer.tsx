import React from "react";
import {
    dialogsDataType,
    KingActionType,
    messageDataType,
} from "../../redux/store/state";
import {addMassageAC, updateMassageTextAC} from "../../redux/reducer/message.reducer";
import Dialogs from "./Dialogs";






type DialogContainerPropstype = {
    state: { messagesData: Array<messageDataType>,newMessageText:string ,dialogsData: Array<dialogsDataType>, }
    dispatch: (action:KingActionType)=>void

}



function DialogsContainer(props:DialogContainerPropstype) {
    //destructuring
    const {dispatch} = props

    const addMessage = () => {
        dispatch(addMassageAC())
        dispatch(updateMassageTextAC(''))
    }
    const updateTextDialogs = (text : string | undefined) => {
        dispatch(updateMassageTextAC(text?text:''))
    }
    return (<Dialogs state={props.state} addMessage={addMessage} updateTextDialogs={updateTextDialogs}/>)
}

export default DialogsContainer;
