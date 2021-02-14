import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ProfilePageType} from './../../redux/state';

export type ProfilePropsType ={
    profilePage: ProfilePageType
}

function Profile(props:ProfilePropsType) {
    return (
        <div>
           <ProfileInfo />
          <MyPosts postsData={props.profilePage.postsData} />
        </div>
    )
}

export default Profile;