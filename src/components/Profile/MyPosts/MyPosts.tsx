import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


type MypostsPropsType = {
    postsData: Array<PostType>
    addPost: (newPostText: string) => void
}

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props: MypostsPropsType) => {

    let onAddPost = (values: any) => {
        debugger
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <h3> My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={styles.posts}>
                {
                    props.postsData.map(
                        el => <Post
                            postMessage={el.postMessage}
                            likesCount={el.likesCount}
                        />
                    )
                }
            </div>
        </div>

    )
}

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                name={"newPostText"}
                   validate={[requiredField, maxLength10]}
                placeholder={'Что у Вас нового?'}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;