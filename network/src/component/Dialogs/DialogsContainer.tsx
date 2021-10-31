import React from "react";
import {addMassageAC, messagesPageType, updateMassageTextAC} from "../../redux/reducer/message.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { StateRootType} from "../../redux/store/store";
import {compose, Dispatch} from "redux";
import {WithAuthComponent} from "../../Hoc/Hoc";








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


const DialogsContainer = compose<React.ComponentType>(
    connect<MapStateToPropsType,MapDispatchToProps,{},StateRootType>(mapStateToProps,mapDispatchToProps),
    WithAuthComponent,
)(Dialogs)

export default DialogsContainer;

