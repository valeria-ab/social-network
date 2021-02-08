import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div>
           <ProfileInfo />
          <MyPosts />
        </div>
    )
}

export default Profile;