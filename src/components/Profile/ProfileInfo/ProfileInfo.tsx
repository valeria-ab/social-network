import React, { ChangeEvent, useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { ProfileType, ProfileContactsType } from "../../../types/types";
import { ProfileDataFormReduxForm } from "./ProfileDataForm";

type PropsType = {
  isOwner: boolean;
  profile: null | ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

const ProfileInfo: React.FC<PropsType> = ({
  profile,
  status,
  isOwner,
  savePhoto,
  updateStatus,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  const userPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU";

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData);
    setEditMode(false);
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataFormReduxForm
            initialValues={profile}
            onSubmit={onSubmit}
            profile={profile}
          />
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
};

type ProfileDataType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMode: () => void;
};
const ProfileData: React.FC<ProfileDataType> = ({
  profile,
  isOwner,
  goToEditMode,
}: ProfileDataType) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
      <div>
        <h2>Full Name: {profile.fullName}</h2>
      </div>
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
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as keyof ProfileContactsType]}
            />
          );
        })}
      </div>
    </div>
  );
};

type ContactsPropsType = {
  contactTitle: string;
  contactValue: string;
};
const Contact: React.FC<ContactsPropsType> = ({
  contactTitle,
  contactValue,
}) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
