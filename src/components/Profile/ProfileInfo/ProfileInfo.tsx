import React from 'react';
import styles from './ProfileInfo.module.css'

function ProfileInfo(props:any) {
    return (
        <div>
            <div ><img className={styles.picture} src="https://wallbox.ru/resize/1920x1080/wallpapers/main/201312/da00af703d0eed4.jpg" alt=""/>
            </div>
            <div>"ava + description"</div>

        </div>
    )
}

export default ProfileInfo;