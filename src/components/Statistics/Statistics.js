import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>

            {title && (
                <h2 className={styles.title}>{title}</h2>
            )}

            <ul className={styles.statList}>
                {stats.map(stat =>
                    <li key={stat.id} className={styles.item}>
                        <span className="label">{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </li>)}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    })).isRequired
}

export default Statistics;