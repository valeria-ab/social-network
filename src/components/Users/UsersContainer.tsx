import React from 'react';
import {connect} from "react-redux";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import axios from "axios";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


 type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    /*  followingInProgress: any*/
}
 type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : <Users onPageChanged={this.onPageChanged}
                             totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             users={this.props.users}
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
                    />

            }

        </>

    }

}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);