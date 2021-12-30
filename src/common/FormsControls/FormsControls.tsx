import React, { Component } from "react";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../utils/validators/validators";
import s from "./FormsControls.module.css";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}
export const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children }) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

//rest-оператор; пропсы будут содержать всё кроме инпута и меты

export const Textarea:  React.FC<WrappedFieldProps> = (props) => {
  const { input, meta,  ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};


export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta,  ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export function createField<FormKeysType extends string>(placeholder: string | undefined,
  name: FormKeysType,
  validators: Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps>,
  props = {}, text = "") {
return <div>
<Field placeholder={placeholder} name={name}
validate={validators}
component={component}
{...props}
/> {text}
</div>
}

export type GetStringKeys<T> = Extract<keyof T, string>