import React from "react";
import {addMassageAC, updateMassageTextAC} from "../../redux/reducer/message.reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


function DialogsContainer() {



    return (<StoreContext.Consumer>{
        (store)=>{
            const addMessage = () => {
                store.dispatch(addMassageAC())
                store.dispatch(updateMassageTextAC(''))
            }
            const updateTextDialogs = (text: string | undefined) => {
                store.dispatch(updateMassageTextAC(text ? text : ''))
            }
           return <Dialogs state={store.getState().messagesPage} addMessage={addMessage} updateTextDialogs={updateTextDialogs}/>
        }

    }</StoreContext.Consumer>)
}

export default DialogsContainer;
