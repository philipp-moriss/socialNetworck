

export type dialogsDataType = {
    id: number;
    name: string;
    img:string;
}

export type messageDataType = {
    id : number;
    message: string;
    yourmesseges:boolean

}
export type messagesPageType = {
    messagesData: Array<messageDataType>;
    newMessageText:string;
    dialogsData: Array<dialogsDataType>;
}
export type MessageActionType = addMassageACType |updateMassageTextACType
const initionalState:messagesPageType = {
    messagesData : [
        {id: 1, message: "hi" ,yourmesseges : true},
        {id: 2, message: "What's up ?", yourmesseges:false},
        {id: 3, message: "broooooooooooo", yourmesseges: true},
        {id: 4, message: "brroooo, what you do ?", yourmesseges:false},
        {id: 5, message: "im raiding on my bike", yourmesseges:true},
    ],
    newMessageText:"string",
    dialogsData:[
        {id: 1, name: 'Philipp', img:'https://farm1.static.flickr.com/95/222276161_c837076699.jpg'},
        {id: 2, name: 'Tanya', img:'http://aeoneal.com/imagery/alex-avatar-plaid-left-red.png' },
        {id: 3, name: 'Kirill',img:'http://eran.geek.co.il/wp-content/uploads/2005/11/South%20Park%20Avatar1.jpg'},
        {id: 4, name: 'Anya', img:'http://sun9-78.userapi.com/c1371/g2831414/a_296a6b5f.jpg'},
        {id: 5, name: 'Danila', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHDuKEec5wiYfw8UEM6tzJHmNY5pRiQjnmg&usqp=CAU'},
    ],

}

const messageReducer = (state:messagesPageType=initionalState, action:MessageActionType)=>{
    switch (action.type){
        case "ADD-MASSAGE":{
            const newMessage ={id: 2, message: state.newMessageText, yourmesseges:true}
            return {...state,messagesData:[...state.messagesData,newMessage]}
        }
        case "UPDATE-NEW-MASSAGE-TEXT":{
            return {...state,newMessageText:action.newText}
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