import React, { ChangeEvent, useEffect, useState } from "react";

type ProfileStatusWithHooksPropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

export const ProfileStatusWithHooks = (
  props: ProfileStatusWithHooksPropsType
) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) =>
    setStatus(event.currentTarget.value);

  return (
    <div>
      <b>Status: </b>
      {editMode ? (
        <input
          autoFocus={true}
          value={status}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
        />
      ) : (
        <span onDoubleClick={activateEditMode}>{props.status}</span>
      )}
    </div>
  );
};
