import React from 'react';
import styles from './Post.module.css'

type PostMessageType = {
    postMessage: string
    likesCount: number
}
function Post(props:PostMessageType) {
    return (
        <div className={styles.post}>
            <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'/>
            <span>{props.postMessage}</span>
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;