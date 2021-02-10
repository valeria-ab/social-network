import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

/*type PostMessageType = {
    message: string
    likesCount: number
}*/

function MyPosts() {
    let postsData = [
        {id: 1, post: "Hi! It's my first post", likesCount: 3},
        {id: 2, post: "Yo!", likesCount: 12}
    ];
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
                        postsData.map(
                            el =>   <Post
                                message={el.post}
                                likesCount={el.likesCount}
                            />
                        )
                    }
                </div>
            </div>

    )
}

export default MyPosts;