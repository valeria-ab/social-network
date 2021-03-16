import React from 'react';
import StoreContext from '../../StoreContext';
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../../redux/profile-reducer';
import MyPosts from "./MyPosts";



function MyPostsContainer() {
    return (
        //фигурная скобка должна быть на новой строке или ниче не работает. кек
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState()

                let addPost = () => {
                    store.dispatch(AddPostActionCreator())
                }

                let onPostChange = (newPostText: string) => {
                    store.dispatch(UpdateNewPostTextActionCreator(newPostText))
                }

                return <MyPosts
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                    postsData={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;