import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionTypes, ProfilePageType, StoreType} from '../../redux/store';
import MyPostsContainer from "./MyPosts/MyPostsContainer";



function  Profile() {
    return (
        <div>
           <ProfileInfo />
          <MyPostsContainer />
        </div>
    )
}

export default Profile;