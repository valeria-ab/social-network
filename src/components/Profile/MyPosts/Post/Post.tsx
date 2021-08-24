import React from 'react';
import styles from './Post.module.css'

type PostMessageType = {
    postMessage: string
    likesCount: number
}
function Post(props:PostMessageType) {
    return (
        <div className={styles.post}>

            <img src='data:image/jpeg;base64,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' />
           <span> { props.postMessage} </span>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;