import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile
} from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { ProfileType } from "../../types/types";

type PathParamsType = {
  userId: number | null;
};

type MapStateToPropsType = {
  profile: null | ProfileType;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  getUserProfile: (userId: number | null) => void;
  getUserStatus: (userId: number | null) => void;
  updateUserStatus: (status: string) => void;
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
};

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> &
  ProfileContainerPropsType;

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
    }
    this.refreshProfile();
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

/*const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);*/

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

//вызовы идут снизу вверх - ProfileContainer оборачивается withAuthRedirect, то что она вернёт вызывается withRouter и т.д.
export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
