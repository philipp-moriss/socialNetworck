import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusTC,
    getProfileTC,
    ProfileUser,
    SetUsersProfileAC,
    UpdateStatusTC
} from "../../redux/reducer/profile.reducer";
import {StateRootType} from "../../redux/store/store";
import {withRouter} from "react-router-dom";
import {WithAuthComponent} from "../../Hoc/Hoc";
import {compose} from "redux";

type PropsProfileContainer = {
    status:string
    getProfileStatusTC:(ID: string | number) => void;
    UpdateStatusTC:(status:string)=>void;
    isAuth: boolean | null
    SetUsersProfileAC: (profile: ProfileUser) => void;
    getProfileTC: (ID: string | number) => void;
    profile: ProfileUser | null;
    history: any;
    location: { pathname: string, search: string, hash: string, state: any, key: string };
    match: {
        isExact: boolean;
        params: { userID: string };
        path: string;
        url: string;
    }

}


class ProfileContainer extends React.Component<PropsProfileContainer> {
    componentDidMount() {
        let userId: string| number = this.props.match.params.userID === ":userID"  ?   19502 : this.props.match.params.userID;
        this.props.getProfileTC(userId)
        this.props.getProfileStatusTC(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus = {this.props.UpdateStatusTC}/>
            </div>);
    }
}

type MapStateToPropsType = {
    profile: ProfileUser | null
    status:string
}
type MapDispatchToPropsType = {
    SetUsersProfileAC: (profile: ProfileUser) => void;
    getProfileTC: (ID: string | number) => void;
    getProfileStatusTC:(ID: string | number) => void;
    UpdateStatusTC:(status:string)=>void;
}

const mapStateToProps = (state: StateRootType): MapStateToPropsType => ({
    profile: state.profilePage.profileUser,
    status: state.profilePage.status,
})


const Copmponent = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateRootType>(mapStateToProps, {
        SetUsersProfileAC,
        getProfileTC,
        getProfileStatusTC,
        UpdateStatusTC,
    }),
    withRouter,
    WithAuthComponent,
)
(ProfileContainer)
export default Copmponent