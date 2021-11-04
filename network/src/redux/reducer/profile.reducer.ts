import {Dispatch} from "redux";
import {ProfileApi} from "../../API/API";

export type ProfileActionType = addpostACType | updatePostTextACType | SetUsersProfileACType | SetStatusProfileACACType ;
export type postDataType = {
    id: number;
    title: string;
    img: string;
    value: number;
}
export type profilePageType = {
    postData: Array<postDataType>,
    newPostText: string,
    profileUser:ProfileUser | null,
    status : string,
}


export type ProfileUser = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null | string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null | string,
        github: string,
        mainLink: null | string
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}


const initionalState: profilePageType = {
    postData: [
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
    newPostText: "string",
    profileUser: null,
    status:"status",

}

const profileReducer = (state: profilePageType = initionalState, action: ProfileActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: 3,
                title: state.newPostText,
                value: 0,
                img: "https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651",
            }
            return {...state, postData: [newPost, ...state.postData]}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state,profileUser: action.profile}
        }
        case "SET-STATUS-PROFILE":{
            return {...state,status:action.status}
        }
        default: {
            return state
        }
    }
}

export type  addpostACType = ReturnType<typeof addpostAC>
export const addpostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export type  updatePostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText,
    } as const
}

export type SetUsersProfileACType = ReturnType<typeof SetUsersProfileAC>
export const SetUsersProfileAC = (profile: ProfileUser) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export type SetStatusProfileACACType = ReturnType<typeof SetStatusProfileAC>
export const SetStatusProfileAC = (status:string) => {
    return {
        type: "SET-STATUS-PROFILE",
        status
    } as const
}

export const getProfileTC = (ID:string| number) => (dispatch:Dispatch)=>{


    ProfileApi.getProfile(ID)
        .then(resp => {
            dispatch(SetUsersProfileAC(resp.data))
        })
}

export const getProfileStatusTC = (ID:string| number) => (dispatch:Dispatch)=>{
    ProfileApi.getStatusProfile(ID)
        .then(resp => {
            dispatch(SetStatusProfileAC(resp.data))
        })
}



export const UpdateStatusTC = (status:string) => (dispatch:Dispatch)=>{
    ProfileApi.putStatusProfile(status)
        .then(resp => {
            console.log(resp)
            if (resp.data.resultCode === 0){
                dispatch(SetStatusProfileAC(status))
            }

        })
}


export default profileReducer;