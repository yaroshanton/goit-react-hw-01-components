import React from 'react'
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

function FriendListItem({ friends }) {
    return (
        friends.map(friend =>
            <li key={friend.id} className={styles.item} >
                <span className={friend.isOnline ? styles.isOnline : styles.isOffline}></span>
                <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name}</p>
            </li>
        )
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,

    })).isRequired
}

export default FriendListItem;