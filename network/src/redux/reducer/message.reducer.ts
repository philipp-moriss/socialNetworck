import {KingActionType, messagesPageType} from "../state/state";


const messageReducer = (state:messagesPageType, action:KingActionType)=>{
    switch (action.type){
        case "ADD-MASSAGE":{
            const newMessage ={id: 2, message: state.newMessageText, yourmesseges:true}
            state.messagesData.push(newMessage)
            return state
        }
        case "UPDATE-NEW-MASSAGE-TEXT":{
            state.newMessageText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}

export type  addMassageACType = ReturnType<typeof addMassageAC>
export const addMassageAC = ()=>{
    return{
        type:'ADD-MASSAGE'
    }as const
}
export type  updateMassageTextACType = ReturnType<typeof updateMassageTextAC>
export const updateMassageTextAC = (newText:string)=>{
    return{
        type:'UPDATE-NEW-MASSAGE-TEXT',
        newText:newText,
    }as const
}

export default messageReducer;