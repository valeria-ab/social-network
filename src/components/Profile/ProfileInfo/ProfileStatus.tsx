import React from 'react';
import styles from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";
import Preloader from "../../../common/Preloader/Preloader";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div><input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/></div>
                        : <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                }
            </div>
        )
    }

}