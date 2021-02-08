import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

/*type PostMessageType = {
    message: string
    likesCount: number
}*/

function MyPosts() {
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
                    <Post message={"Hi! It's my first post"} likesCount={3}/>
                    <Post message={"Yo!"} likesCount={12}/>

                </div>

            </div>

    )
}

export default MyPosts;