import React, {ChangeEvent} from 'react';
import styles from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";
import Preloader from "../../../common/Preloader/Preloader";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                <h5>
                    {
                        this.state.editMode
                            ? <div><input autoFocus={true}
                                          value={this.state.status}
                                          onBlur={this.deactivateEditMode}
                                          onChange={this.onStatusChange}
                            /></div>
                            : <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                    }
                </h5>

            </div>

        )
    }

}