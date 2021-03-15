import React from 'react';
import {StoreType} from '../../../redux/store';
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../../redux/profile-reducer';
import MyPosts from "./MyPosts";

type MypostsContainerPropsType = {
    store: StoreType
}

function MyPostsContainer(props: MypostsContainerPropsType) {
const state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(AddPostActionCreator())
    }

    let onPostChange = (newPostText: string) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(newPostText))
    }

    return (<MyPosts
        addPost={addPost}
        updateNewPostText={onPostChange}
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;