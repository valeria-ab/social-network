import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionTypes, ProfilePageType} from './../../redux/state';

export type ProfilePropsType ={
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

function Profile(props:ProfilePropsType) {
    return (
        <div>
           <ProfileInfo />
          <MyPosts
              postsData={props.profilePage.postsData}
              newPostText={props.profilePage.newPostText}
              dispatch={props.dispatch}
          />
        </div>
    )
}

export default Profile;