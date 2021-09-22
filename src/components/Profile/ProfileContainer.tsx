import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileResponseType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: null | ProfileResponseType
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}


type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)

    }

    render() {
           return (
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);