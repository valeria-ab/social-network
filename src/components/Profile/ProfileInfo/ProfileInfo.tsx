import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import { ProfileResponseType } from '../../../types/types';

type ProfileInfoPropsType = {
    profile: null | ProfileResponseType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo({profile, status, updateStatus}:ProfileInfoPropsType) {
    if(!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large}/>
                <h2>Full Name: |{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>Status: {profile.aboutMe}</div>
                <div>Looking For a Job: {
                    profile.lookingForAJob
                        ?<span>✅</span>
                        :<span>❌</span>
                }</div>
                <div>Description: {profile.lookingForAJobDescription}</div>
            </div>

        </div>
    )
}

export default ProfileInfo;