import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostPropsType} from "../../../redux/profile-reducer";


type MypostsPropsType = {
    postsData: Array<PostPropsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

function MyPosts(props: MypostsPropsType ) {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {  props.addPost()  }

    //пишем такую странную дичь потому что тайпСкрипт переживает что в результате этого
    // newPostElement.current.value может придти не тип "строка" а undefined
    let onPostChange = () => {
        if(newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div>
                <h3> My posts</h3>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        placeholder={'Что у Вас нового?'}
                        onChange={onPostChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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