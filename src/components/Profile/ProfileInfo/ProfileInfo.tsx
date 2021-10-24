import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import { ProfileResponseType } from '../../../types/types';

type ProfileInfoPropsType = {
    profile: null | ProfileResponseType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props:ProfileInfoPropsType) {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
                <h2>Full Name: {props.profile.fullName}</h2>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>Status: {props.profile.aboutMe}</div>
                <div>Looking For a Job: {
                    props.profile.lookingForAJob
                        ?<span>✅</span>
                        :<span>❌</span>
                }</div>
                <div>Description: {props.profile.lookingForAJobDescription}</div>
            </div>

        </div>
    )
}

export default ProfileInfo;