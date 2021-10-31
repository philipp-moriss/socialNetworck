import {UserApi} from "../../API/API";
import {Dispatch} from "redux";

export type user = { id: number, photos: { small: string, large: string }, name: string, status: string, followed: boolean }
export type UsersType = {
    Users: Array<user>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    disableButtonOnFollow: Array<number>;
}
export type Actions<tip> = tip extends { [key: string]: infer action } ? action : never;
export type UserActionType = ReturnType<Actions<typeof actions>>

const initionalState: UsersType = {
    Users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    disableButtonOnFollow: [],
}


const UsersReducer = (state: UsersType = initionalState, action: UserActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                Users: state.Users.map((element) => element.id === action.userID ? {
                    ...element,
                    followed: true
                } : element)
            }
        }
        case "UN-FOLLOW": {
            return {
                ...state,
                Users: state.Users.map((element) => element.id === action.userID ? {
                    ...element,
                    followed: false
                } : element)
            }
        }
        case "SET-USERS": {
            debugger
            return {...state, Users: [...action.users]}
        }
        case "SET-PAGE": {
            return {...state, currentPage: action.page}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.usersCount}
        }
        case "SET-TOGLE": {
            return {...state, isFetching: action.isFetch}
        }
        case "DISABLE-FOLLOW": {
            return {
                ...state, disableButtonOnFollow :
                    action.disable
                    ? [...state.disableButtonOnFollow, action.userId]
                    : [...state.disableButtonOnFollow.filter(id => id !== action.userId)]
            }
        }
        default: {
            return state
        }
    }
}


export const actions = {
    followAC: (userID: number) => {
        return {
            type: "FOLLOW",
            userID,
        } as const
    },
    unfollowAC: (userID: number) => {
        return {
            type: "UN-FOLLOW",
            userID,
        } as const
    },
    setUsersAC: (users: Array<user>) => {
        return {
            type: "SET-USERS",
            users
        } as const
    },
    setCurrentPageAC: (page: number) => {
        return {
            type: "SET-PAGE",
            page
        } as const
    },
    setTotalUsersCountAC: (usersCount: number) => {
        return {
            type: "SET-TOTAL-COUNT",
            usersCount
        } as const
    },
    setTogleAC: (isFetch: boolean) => {
        return {
            type: "SET-TOGLE",
            isFetch
        } as const
    },
    disableButtonOnFollowAC: (disable: boolean, userId: number) => {
        return {
            type: "DISABLE-FOLLOW",
            disable,
            userId
        } as const
    }

}


export const GetUsersTC = (currentPage:number, pageSize:number) => (dispatch: Dispatch)=>{
    dispatch(actions.setTogleAC(true))
        UserApi.getUsers(currentPage,pageSize)
            .then(resp => {
                let {items, totalCount} = resp
                if (items) {
                    dispatch( actions.setUsersAC(items))
                    dispatch( actions.setTotalUsersCountAC(totalCount))
                    dispatch( actions.setTogleAC(false))
                }
            })
}

export const FollowTC = (userID:number) => (dispatch: Dispatch) =>{
    dispatch(actions.disableButtonOnFollowAC(true, userID))
    UserApi.Follow(userID)
        .then(resp => {
            if (resp.resultCode === 0) {
               dispatch( actions.followAC(userID))
            }
            dispatch(actions.disableButtonOnFollowAC(false, userID))
        })
}

export const UnFollowTC = (userID:number) => (dispatch: Dispatch) =>{
    dispatch(actions.disableButtonOnFollowAC(true, userID))
    UserApi.unFollow(userID)
        .then(resp => {
            if (resp.resultCode === 0) {
                dispatch( actions.followAC(userID))
            }
            dispatch(actions.disableButtonOnFollowAC(false, userID))
        })
}



export default UsersReducer;