import React from "react";
import s from "./FormsControls.module.css"

//rest-оператор; пропсы будут содержать всё кроме инпута и меты
// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {
 const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "") }>
            <div>
                <textarea {...input} {...props.input}/>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}