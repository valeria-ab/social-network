import React from 'react';
import { InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StatePropsType} from "../../redux/redux-store";
import s from "../../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

 const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
{createField("Email", "email", [requiredField], Input)}
{createField("Password", "password", [requiredField], Input, {type: "password"})}
{createField("", "rememberMe", [], Input, {type: "checkbox"}, "remember me")}


            {/* <div>
                <Field placeholder={"Email"} name={"email"} validate={[requiredField]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[requiredField]} component={Input}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} validate={[requiredField]} type={"checkbox"}/> remember
                me
            </div> */}
            {
                error && <div className={s.formSummaryError}>{error}</div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type LoginProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
const Login = (props: LoginProps) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: StatePropsType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);