import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, ProfileResponseType, updateUserStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: null | ProfileResponseType
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}


type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '13755'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

    }

    render() {
           return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateUserStatus}
            />
        )
    }
}

/*const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);*/

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

//вызовы идут снизу вверх - ProfileContainer оборачивается withAuthRedirect, то что она вернёт вызывается withRouter и т.д.
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)