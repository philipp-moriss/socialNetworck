import {connect} from "react-redux";
import {StateRootType} from "../../redux/store/store";
import {actions, user} from "../../redux/reducer/Users.reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preoalder/Preloader";


type MapStateToPropsType = {
    users: user[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (user: Array<user>) => void
    setPageHandler: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void;
    setIsFetch:(isFetch:boolean)=>void;
}


type  UserTypeProps = {
    users: user[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUser: (user: Array<user>) => void;
    setPageHandler: (page: number) => void;
    setTotalUsersCount: (usersCount: number) => void;
    setIsFetch:(isFetch:boolean)=>void;
}

class UsersClassComponents extends React.Component<UserTypeProps> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetch(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(resp => {
                    let {items, totalCount} = resp.data
                    if (items) {
                        this.props.setUser(items)
                        this.props.setTotalUsersCount(totalCount)
                        this.props.setIsFetch(false)
                    }
                })
        }

    }

    onPageChange = (page: number) => {
        this.props.setPageHandler(page)
        this.props.setIsFetch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(resp => {
                // @ts-ignore
                let items = resp.data.items
                if (items) {
                    this.props.setUser(items)
                    this.props.setIsFetch(false)
                }
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                />
            </>
        )
    }
}


const mapStateToProps = (state: StateRootType): MapStateToPropsType => {
    return {
        users: state.UsersPage.Users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(actions.followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(actions.unfollowAC(userID))
        },
        setUser: (user: Array<user>) => {
            dispatch(actions.setUsersAC(user))
        },
        setPageHandler: (page: number) => {
            dispatch(actions.setCurrentPageAC(page))
        },
        setTotalUsersCount: (usersCount: number) => {
            dispatch(actions.setTotalUsersCountAC(usersCount))
        },
        setIsFetch:(isFetch:boolean)=>{
            dispatch(actions.setTogleAC(isFetch))
        },
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateRootType>(mapStateToProps,
    mapDispatchToProps
)(UsersClassComponents)