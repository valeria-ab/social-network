import React from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../types/types";
import styles from "./Users.module.css";

type UserPropsType = {
  user: UserType;
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  followingInProgress: Array<number>;
};

const User = ({
  user,
  follow,
  unfollow,
  followingInProgress,
}: UserPropsType) => {
  return (
    <div>
      <span>
        <div>
          {/*  <img src={u.photoUrl} className={styles.userPhoto}/>*/}
          <NavLink to={"/profile/" + user.id}>
            <img
              src={
                user.photos.small != null
                  ? user.photos.small
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU"
              }
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>
      </span>
    </div>
  );
};

export default User;
