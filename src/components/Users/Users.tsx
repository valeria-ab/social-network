import React from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../types/types";
import Paginator from "../../common/Paginator/Paginator";
import styles from "./Users.module.css";
import User from "./User";
import { unfollow } from "../../redux/users-reducer";

type UsersPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: Array<UserType>;
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  followingInProgress: Array<number>;
};

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  follow,
  unfollow,
}: UsersPropsType) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        portionSize={10}
      />
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
