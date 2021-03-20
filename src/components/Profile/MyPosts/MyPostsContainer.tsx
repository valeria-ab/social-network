import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionTypes} from "../../../redux/store";
import {AddPostActionCreator, PostPropsType, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

//нужно типизировать то что mapStateToProps возвращает
type MapStateToPropsType = {
    postsData: Array<PostPropsType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addPost: () => dispatch(AddPostActionCreator()),
        updateNewPostText: (newPostText: string) => dispatch(UpdateNewPostTextActionCreator(newPostText))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
