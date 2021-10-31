import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, ProfileUser, SetUsersProfileAC} from "../../redux/reducer/profile.reducer";
import {StateRootType} from "../../redux/store/store";
import {withRouter} from "react-router-dom";
import {WithAuthComponent} from "../../Hoc/Hoc";
import {compose} from "redux";

type PropsProfileContainer = {
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
        this.props.getProfileTC(this.props.match.params.userID)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>);
    }
}

type MapStateToPropsType = {
    profile: ProfileUser | null
}
type MapDispatchToPropsType = {
    SetUsersProfileAC: (profile: ProfileUser) => void
    getProfileTC: (ID: string | number) => void
}

const mapStateToProps = (state: StateRootType): MapStateToPropsType => ({
    profile: state.profilePage.profileUser,
})


const Copmponent = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateRootType>(mapStateToProps, {
        SetUsersProfileAC,
        getProfileTC
    }),
    withRouter,
    WithAuthComponent
)
(ProfileContainer)
export default Copmponent