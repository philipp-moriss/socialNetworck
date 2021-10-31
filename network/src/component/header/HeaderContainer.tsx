import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import {StateRootType} from "../../redux/store/store";
import {AuthStateType, AuthTC, SetAuthStateAC, setFetchingAC} from "../../redux/reducer/Auth.reducer";


type HeaderContainerPropsType = {
    SetAuthStateAC: (data: AuthStateType,auth:boolean) => void;
    setFetchingAC : (isFetch: boolean) => void;
    login: null | string;
    isAuth : boolean | null;
    isFetching: boolean | null;
    AuthTC:()=>void;
}



class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        this.props.AuthTC()
    }

    render() {
        return <Header {...this.props}/>;
    }
}

type MapStateToProps = {
    login: null | string;
    isAuth : boolean | null;
    isFetching: boolean | null;
}

const MapStateToProps = (state:StateRootType) => ({
    login: state.Auth.login,
    isAuth: state.Auth.isAuth,
    isFetching: state.Auth.isFetching
})
type MapDispatchToPropsType = {
    SetAuthStateAC: (data: AuthStateType,auth:boolean) => void;
    setFetchingAC : (isFetch: boolean) => void;
    AuthTC:()=>void;
}

export default  connect<MapStateToProps,MapDispatchToPropsType,{},StateRootType>(MapStateToProps,
    {SetAuthStateAC,setFetchingAC,AuthTC})(HeaderContainer) ;