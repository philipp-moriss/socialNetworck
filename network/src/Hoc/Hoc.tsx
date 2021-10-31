import {Redirect} from "react-router-dom";
import {PATH} from "../App";
import React, {ComponentType} from "react";
import { connect } from "react-redux";
import {StateRootType} from "../redux/store/store";



type MapStatePropsType = {
    isAuth : boolean | null
}


const mapStateToProps = (state:StateRootType):MapStatePropsType =>{
    return {
        isAuth : state.Auth.isAuth
    }
}

export function WithAuthComponent <T>(Component:ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth,...restProps} = props
        if (props.isAuth === false) {
            return <Redirect to={PATH.AUTH}/>
        }
        return <Component {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)

}

