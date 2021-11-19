export type ProfileContactsType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};
export type ProfileResponseType = {
  aboutMe: string;
  contacts: ProfileContactsType;
  lookingForAJob: true;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: ProfilePhotosType;
  resultCode: number;
};
export type PostType = {
  id: string;
  postMessage: string;
  likesCount: number;
};
export type ProfilePhotosType = {
  small: string | null;
  large: string;
};

export type UserType = {
  name: string;
  id: number;
  photos: ProfilePhotosType;
  status: string;
  followed: boolean;
};
