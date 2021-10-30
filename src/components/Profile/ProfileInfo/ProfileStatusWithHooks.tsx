import React, {ChangeEvent, useState} from 'react';

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {

    /*
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    */

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => setStatus(event.currentTarget.value)
    
    
        return (
            <div>
                <h5>
                    {
                        editMode
                            ? <div><input autoFocus={true}
                                          value={status}
                                          onBlur={deactivateEditMode}
                                          onChange={onStatusChange}
                            /></div>
                            : <div><span onDoubleClick={activateEditMode}>{props.status}</span></div>
                    }
                </h5>

            </div>

        )
}