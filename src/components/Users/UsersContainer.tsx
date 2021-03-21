import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    FollowActionCreator,
    setUsersActionCreator,
    UnfollowActionCreator,
    UsersPageType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {StatePropsType} from "../../redux/redux-store";


type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    follow: (userID:number) => void
    unfollow: (userID:number) => void
    setUsers: (users: []) => void
}

const mapStateToProps = (state:StatePropsType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
       follow: (userID:number) => dispatch(FollowActionCreator(userID)),
        unfollow: (userID:number) => dispatch(UnfollowActionCreator(userID)),
        setUsers: (users:[]) => dispatch(setUsersActionCreator(users))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);