import React from 'react';
import {Formik} from 'formik';
import {FilterType} from '../../redux/users-reducer';
import {Field} from 'formik';

type FormType = {
    term: string
    friend: "true" | "false" | "null"
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
const UsersSearchForm = React.memo((props: PropsType) => {

    const validate = (values: any) => {
        const errors = {};
        // if (!values.email) {
        //     errors.email = 'Required';
        // } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //     errors.email = 'Invalid email address';
        // }
        return errors;
    }

    const submit = (values:  FormType,
                    {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {

const filter: FilterType = {
    term: values.term,
    friend: values.friend === "null" ? null : values.friend === "true" ? true : false
}

        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={{term: '', friend: 'null'}}
                validate={validate}
                onSubmit={submit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="term"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.email}
                        />
                        {/*{errors.email && touched.email && errors.email}*/}
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
})

export default UsersSearchForm;