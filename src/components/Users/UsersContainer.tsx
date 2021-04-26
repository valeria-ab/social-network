import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import UsersC from "./UsersС";


type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    follow: (userID:number) => void
    unfollow: (userID:number) => void
    setUsers: (users:Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
       follow: (userID:number) => dispatch(followAC(userID)),
        unfollow: (userID:number) => dispatch(unfollowAC(userID)),
        setUsers: (users:Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber:number) => dispatch(setCurrentPageAC(pageNumber))
        setTotalUsersCount: (totalUsersCount:number) => dispatch(setTotalUsersCountAC(totalUsersCount))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);