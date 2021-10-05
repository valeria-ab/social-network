import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: null | ProfileResponseType
    status: string
    updateStatus: (status: string) => void
}


function  Profile(props: ProfilePropsType) {
    return (
        <div>
           <ProfileInfo profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
          <MyPostsContainer />
        </div>
    )
}

export default Profile;