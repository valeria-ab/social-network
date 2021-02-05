import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


function MyPosts(props:any) {

    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={styles.posts} >
                    <Post message={"Hi!It's my first post"} likesCount={3}/>
                    <Post message={"Yo!"} likesCount={12}/>

                </div>

            </div>

    )
}

export default MyPosts;