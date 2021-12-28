import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import Preloader from "../../../common/Preloader/Preloader";
import { ProfileResponseType } from "../../../types/types";

type ProfileDataFormType = {
  profile: any;
  handleSubmit: any;
};
const ProfileDataForm = (props: any) => {
  //посмотри как сделан компонент Login
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b> Looking For a Job: </b>{" "}
        {createField("", "LookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My skills: </b>{" "}
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
    </form>
  );
};

export const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);
