import React from 'react'
import styles from './FriendList.module.css'

export default function FriendList({ children }) {
    return (
        <ul className={styles.friendList}>{children}</ul>
    )
}