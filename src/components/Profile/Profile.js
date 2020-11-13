import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css'

function Profile({ user }) {
    const { avatar, name, tag, location, stats } = user;
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="user avatar"
                    className="avatar"
                />
                <p className={styles.name}>{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className="label">Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Profile;