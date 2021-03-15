import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionTypes, ProfilePageType, StoreType} from '../../redux/store';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType ={
    store: StoreType
}

function  Profile(props:ProfilePropsType) {
    return (
        <div>
           <ProfileInfo />
          <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;