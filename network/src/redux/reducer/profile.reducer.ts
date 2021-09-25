import {KingActionType, profilePageType} from "../state/state";



const profileReducer = (state:profilePageType,action:KingActionType)=>{
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