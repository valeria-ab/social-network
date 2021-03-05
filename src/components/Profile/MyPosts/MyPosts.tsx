import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionTypes, AddPostActionCreator, PostPropsType, UpdateNewPostTextActionCreator} from './../../../redux/state';

type MypostsPropsType = {
    postsData: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

function MyPosts(props: MypostsPropsType ) {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(AddPostActionCreator())
        }

    //пишем такую странную дичь потому что тайпСкрипт переживает что в результате этого
    // newPostElement.current.value может придти не тип "строка" а undefined
    let onPostChange = () => {
        if(newPostElement.current) {
            props.dispatch(UpdateNewPostTextActionCreator(newPostElement.current.value))

        }
    }

    return (
        <div>
                <h3> My posts</h3>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={styles.posts} >
                    {
                        props.postsData.map(
                            el =>   <Post
                                postMessage={el.postMessage}
                                likesCount={el.likesCount}
                            />
                        )
                    }
                </div>
            </div>

    )
}

export default MyPosts;