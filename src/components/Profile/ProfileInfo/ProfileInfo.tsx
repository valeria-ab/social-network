import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { ProfileResponseType } from "../../../types/types";
import { isPropertySignature } from "typescript";

type ProfileInfoPropsType = {
  isOwner: boolean;
  profile: null | ProfileResponseType;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: Function
};

function ProfileInfo({
  profile,
  status,
  isOwner,
  savePhoto,
  updateStatus,
}: ProfileInfoPropsType) {
  const userPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU";

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e:any) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  }
  return (
    <div>
      <div>
        <img src={profile.photos.large || userPhoto} />
        {isOwner && (
          <input
            type={"file"}
            onChange={onMainPhotoSelected}
          />
        )}
        <h2>Full Name: {profile.fullName}</h2>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>Status: {profile.aboutMe}</div>
        <div>
          Looking For a Job:{" "}
          {profile.lookingForAJob ? <span>✅</span> : <span>❌</span>}
        </div>
        <div>Description: {profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
