// export type AuthStateType = {
//     id: number | null;
//     email: string | null;
//     login: string | null;
// }
import {Dispatch} from "redux";
import {HeaderApi} from "../../API/API";

const initialState = {
    id: null as null | number,
    email: null as string | null,
    login: null as string | null,
    isFetching: false as boolean | null,
    isAuth: true as boolean | null,
}

export type AuthStateType = typeof initialState

export type AuthActionType = SetAuthStateACType | setFetchingACType


const AuthReducer = (state: AuthStateType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "SET-AUTH-DATA": {
            return {...state, ...action.data, isAuth: action.auth}
        }
        case "SET-TOGLE":{
            return {...state,isFetching: action.isFetch}
        }
        default: {
            return state
        }
    }
}

export type SetAuthStateACType = ReturnType<typeof SetAuthStateAC>
export const SetAuthStateAC = (data: AuthStateType,auth:boolean) => {
    return {
        type: "SET-AUTH-DATA",
        data,
        auth
    } as const
}

export type setFetchingACType = ReturnType<typeof setFetchingAC>
export const setFetchingAC = (isFetch: boolean) => {
    return {
        type: "SET-TOGLE",
        isFetch
    } as const
}

export const AuthTC = () => (dispatch:Dispatch) => {
    dispatch(setFetchingAC(true))
    HeaderApi.getAuth()
        .then(resp=>{
            if (resp.data.resultCode !== 1){
                dispatch(SetAuthStateAC(resp.data.data,true))
                dispatch(setFetchingAC(false))
            }
            else {
                dispatch(SetAuthStateAC(resp.data.data,false))
                dispatch(setFetchingAC(false))
            }
        })
}


export default AuthReducer;