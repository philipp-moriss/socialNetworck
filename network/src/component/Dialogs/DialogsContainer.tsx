import React from "react";
import {addMassageAC, updateMassageTextAC} from "../../redux/reducer/message.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {reducerPackType} from "../../redux/store/store";











let mapStateToProps = (state:reducerPackType)=>{
    return{
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch:any)=>{
    return {
        addMessage : () => {
            dispatch(addMassageAC())
            dispatch(updateMassageTextAC(''))
        },
        updateTextDialogs : (text: string | undefined) => {
            dispatch(updateMassageTextAC(text ? text : ''))
        },
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;


// old version
/*function DialogsContainer() {



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
}*/
