import React from 'react';
import { ProfilePropsType } from '../Profile';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostPropsType} from './../../../redux/state';

type MypostsPropsType = {
    postsData: Array<PostPropsType>
}

function MyPosts(props: MypostsPropsType ) {
    return (
            <div>
                <h3> My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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