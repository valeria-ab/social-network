import React from 'react';
import {UsersPageType} from "../../redux/users-reducer";
import styles from "./Users.module.css"

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (userID:number) => void
    unfollow: (userID:number) => void
    setUsers: (users: []) => void
}

function Users(props: UsersPropsType) {

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
        </div>
}

export default Users;