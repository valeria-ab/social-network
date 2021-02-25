import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ProfilePageType} from './../../redux/state';

export type ProfilePropsType ={
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

function Profile(props:ProfilePropsType) {
    return (
        <div>
           <ProfileInfo />
          <MyPosts
              postsData={props.profilePage.postsData}
              addPost={props.addPost}
              newPostText={props.profilePage.newPostText}
              updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;