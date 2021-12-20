import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileResponseType } from '../../types/types';


type ProfilePropsType = {
    isOwner:boolean
    profile: null | ProfileResponseType
    status: string
    updateStatus: (status: string) => void
    savePhoto: Function
}


function  Profile(props: ProfilePropsType) {
    return (
        <div>
           <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
          <MyPostsContainer />
        </div>
    )
}

export default Profile;