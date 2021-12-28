import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { ProfileResponseType } from "../../../types/types";
import { ProfileDataFormReduxForm } from "./ProfileDataForm";

type ProfileInfoPropsType = {
  isOwner: boolean;
  profile: null | ProfileResponseType;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: Function;
};

function ProfileInfo({
  profile,
  status,
  isOwner,
  savePhoto,
  updateStatus,
}: ProfileInfoPropsType) {
  const [editMode, setEditMode] = useState(false);

  const userPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU";

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: any) => {
    alert(formData);
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <h2>Full Name: {profile.fullName}</h2>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <img src={profile.photos.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          //@ts-ignore
          <ProfileDataFormReduxForm  handleSubmit={onSubmit} />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  );
}

type ProfileDataType = {
  profile: null | ProfileResponseType;
  isOwner: boolean;
  goToEditMode: () => void;
};
const ProfileData = ({ profile, isOwner, goToEditMode }: ProfileDataType) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b> Looking For a Job: </b>
        {profile.lookingForAJob ? (
          <span>✅</span> && (
            <div>
              <b>My skills: </b> {profile.lookingForAJobDescription}
            </div>
          )
        ) : (
          <span>❌</span>
        )}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            //@ts-ignore
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>
    </div>
  );
};

type ContactType = {
  contactTitle: string;
  contactValue: any;
};
const Contact = (props: ContactType) => {
  return (
    <div className={s.contact}>
      <b>{props.contactTitle} </b>
      {props.contactValue}
    </div>
  );
};

export default ProfileInfo;
