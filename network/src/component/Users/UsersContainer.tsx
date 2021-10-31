import {connect} from "react-redux";
import {StateRootType} from "../../redux/store/store";
import {actions, FollowTC, GetUsersTC, UnFollowTC, user} from "../../redux/reducer/Users.reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preoalder/Preloader";
import {WithAuthComponent} from "../../Hoc/Hoc";
import {compose} from "redux";


type MapStateToPropsType = {
    users: user[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    disableButtonOnFollow: Array<number> | [];

}
type MapDispatchToPropsType = {
    setCurrentPageAC: (page: number) => void
    GetUsersTC: (currentPage: number, pageSize: number) => void;
    UnFollowTC: (userID: number) => void;
    FollowTC: (userID: number) => void;
}

type  UserTypeProps = {
    users: user[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    disableButtonOnFollow: Array<number> | [];
    setCurrentPageAC: (page: number) => void;
    GetUsersTC: (currentPage: number, pageSize: number) => void;
    UnFollowTC: (userID: number) => void;
    FollowTC: (userID: number) => void;
}

class UsersClassComponents extends React.Component<UserTypeProps> {
    componentDidMount() {
        this.props.GetUsersTC(this.props.currentPage, this.props.pageSize)


    }

    onPageChange = (page: number) => {
        this.props.setCurrentPageAC(page)
        this.props.GetUsersTC(page, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    disableButtonOnFollow={this.props.disableButtonOnFollow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    FollowTC={this.props.FollowTC}
                    UnFollowTC={this.props.UnFollowTC}
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
        disableButtonOnFollow: state.UsersPage.disableButtonOnFollow,
    } as MapStateToPropsType
}

const {
    setCurrentPageAC,
} = actions


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateRootType>(
        mapStateToProps,
        {setCurrentPageAC, GetUsersTC, FollowTC, UnFollowTC}
    ),
    WithAuthComponent
)(UsersClassComponents)