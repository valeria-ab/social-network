import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {actions} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import { PostType } from '../../../types/types';

//нужно типизировать то что mapStateToProps возвращает
type MapStateToPropsType = {
    postsData: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        postsData: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(actions.addPostActionCreator(newPostText))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
