import React from 'react';
import styles from "./Users.module.css"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}


const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}

        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      {/*  <img src={u.photoUrl} className={styles.userPhoto}/>*/}
                        <NavLink to={"/profile/" + u.id}>
                          <img
                              src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU"}
                              className={styles.userPhoto}/>

                      </NavLink>
            </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {

                                          props.toggleFollowingProgress(true, u.id)
                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                              {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY": "bcdd4faf-f5b8-4f33-8a06-1a47aa179469"
                                                  }
                                              })
                                              .then(response => {
                                                  if (response.data.resultCode == 0) {
                                                      props.unfollow(u.id)
                                                  }

                                                  props.toggleFollowingProgress(false, u.id)
                                              })
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {

                                          props.toggleFollowingProgress(true, u.id)
                                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                              {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY": "bcdd4faf-f5b8-4f33-8a06-1a47aa179469"
                                                  }
                                              })
                                              .then(response => {
                                                  if (response.data.resultCode == 0) {
                                                      props.follow(u.id)
                                                  }
                                                  props.toggleFollowingProgress(false, u.id)
                                              })
                                      }}>Follow</button>
                        }
                            </div>
                            </span>
                <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                            </span>
            </div>)
        }
    </div>
}

export default Users;