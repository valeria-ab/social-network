import React from 'react';
import styles from "./Users.module.css"
import userPhoto from '../../assets/images/i.webp'
import {UsersContainerPropsType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userID:number) => void
    unfollow: (userID:number) => void
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
                      <NavLink to={"/profile/" + u.id} >
                          <img src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU"} className={styles.userPhoto}/>

                      </NavLink>
            </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
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