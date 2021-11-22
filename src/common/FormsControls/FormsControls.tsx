import React, { Component } from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";

// @ts-ignore
export const FormControl = ({ input, meta: {touched, error}, children }) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

//rest-оператор; пропсы будут содержать всё кроме инпута и меты
// @ts-ignore
export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

// @ts-ignore
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder: string | null,
  name: string,
  validators: any[],
  component: any,
  props: any  = {},
  text?: string
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    /><span>{text}</span>
  </div>
);
