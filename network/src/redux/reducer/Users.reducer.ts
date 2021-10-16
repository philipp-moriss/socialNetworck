

export type user = {id:number,photos:{small:string,large:string},name:string,status:string,followed:boolean}
export type UsersType = {
    Users: Array<user>;
    pageSize:number;
    totalUsersCount:number;
    currentPage:number;
    isFetching:boolean;
}
type Actions<tip> = tip extends {[key:string]: infer action} ? action : never;
type KingAction = ReturnType<Actions<typeof actions>>

const initionalState: UsersType = {
    Users: [],
    pageSize:5,
    totalUsersCount:20,
    currentPage: 1,
    isFetching:true,
}


const UsersReducer = (state: UsersType = initionalState, action: KingAction) => {
    switch (action.type) {
        case "FOLLOW":{
            return{...state,Users:state.Users.map((element)=>element.id===action.userID?{...element,followed:true}:element)}
        }
        case "UN-FOLLOW":{
            return{...state,Users:state.Users.map((element)=>element.id===action.userID?{...element,followed:false}:element)}
        }
        case "SET-USERS":{

            return {...state,Users:[...action.users]}
        }
        case "SET-PAGE":{
            return {...state,currentPage:action.page}
        }
        case "SET-TOTAL-COUNT":{
            return {...state,totalUsersCount:action.usersCount}
        }
        case "SET-TOGLE":{
            return {...state,isFetching:action.isFetch}
        }
        default:{
            return state
        }
    }
}


export const actions = {
    followAC:(userID:number)=>{
        return{
            type:"FOLLOW",
            userID,
        }as const
    },
    unfollowAC:(userID:number)=>{
        return{
            type:"UN-FOLLOW",
            userID,
        }as const
    },
    setUsersAC:(users:Array<user>)=>{
        return{
            type:"SET-USERS",
            users
        }as const
    },
    setCurrentPageAC:(page:number)=>{
        return{
            type:"SET-PAGE",
            page
        }as const
    },
    setTotalUsersCountAC:(usersCount:number)=>{
        return{
            type:"SET-TOTAL-COUNT",
            usersCount
        }as const
    },
    setTogleAC: (isFetch:boolean)=>{
        return{
            type:"SET-TOGLE",
            isFetch
        } as const
    },

}

export default UsersReducer;