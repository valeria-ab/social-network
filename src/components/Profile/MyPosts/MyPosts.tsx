import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostPropsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MypostsPropsType = {
    postsData: Array<PostPropsType>
    addPost: (values:string) => void
}


const MyPosts = (props: MypostsPropsType) => {

    let onAddPost = (values: any) => {
        props.addPost(values)
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
            <Field component={"textarea"}
                name={"newPostText"}
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