import {KingActionType, profilePageType} from "../store/state";

const initionalState:profilePageType ={
    postData:[
        {
            id: 1,
            title: "my first posts",
            value: 11,
            img: "https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651",
        },
        {
            id: 2,
            title: "my to",
            value: 23,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyhjuXjpN5uFiBSWPBOwkKbdCTmGD34EvR1TkdG17jTfK3km8K1CMmrbEZ7__tOrt-PU&usqp=CAU",
        },
    ],
    newPostText:"string",

}

const profileReducer = (state:profilePageType=initionalState,action:KingActionType)=>{
    switch (action.type){
        case "ADD-POST":{
            const newPost = {
                id:3,
                title:state.newPostText,
                value: 0,
                img: "https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651",
            }
            state.postData.unshift(newPost)
            return state
        }
        case "UPDATE-NEW-POST-TEXT":{
            state.newPostText = action.newText
            return state
        }
        default:{
            return state
        }
    }
}

export type  addpostACType = ReturnType<typeof addpostAC>
export const addpostAC = ()=>{
    return{
        type:'ADD-POST'
    }as const
}
export type  updatePostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newText:string)=>{
    return{
        type:'UPDATE-NEW-POST-TEXT',
        newText:newText,
    }as const
}



export default profileReducer;