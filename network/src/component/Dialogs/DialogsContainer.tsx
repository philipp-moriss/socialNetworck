import React from "react";
import {addMassageAC, messagesPageType, updateMassageTextAC} from "../../redux/reducer/message.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { StateRootType} from "../../redux/store/store";
import {Dispatch} from "redux";








type MapStateToPropsType= {
    messagesPage:messagesPageType
}

type MapDispatchToProps = {
    addMessage : () =>void
    updateTextDialogs : (text: string | undefined) => void
}

let mapStateToProps = (state:StateRootType):MapStateToPropsType=>{
    return{
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps=>{
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
const DialogsContainer = connect<MapStateToPropsType,MapDispatchToProps,{},StateRootType>(mapStateToProps,mapDispatchToProps)(Dialogs)

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
