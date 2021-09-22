import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

export let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsForRedirectType) {

        let {isAuth, ...restProps} = props

        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component   {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}