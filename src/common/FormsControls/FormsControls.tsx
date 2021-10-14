import React from "react";
import s from "./FormsControls.module.css"


// @ts-ignore
export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "") }>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}


//rest-оператор; пропсы будут содержать всё кроме инпута и меты
// @ts-ignore
export const Textarea = (props) => {
 const {input, meta, child, ...restProps} = props

    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>

}

// @ts-ignore
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props

    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}