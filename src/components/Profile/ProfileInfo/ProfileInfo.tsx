import React from 'react';
import styles from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: null | ProfileResponseType
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
                <ProfileStatus status={"It's friday, dude"} />
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