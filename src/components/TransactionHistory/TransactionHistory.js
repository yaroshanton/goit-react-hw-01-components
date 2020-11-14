import React from 'react'
import PropTypes from 'prop-types'
import styles from './Transaction.module.css'

function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th className={styles.tableName}>Type</th>
                    <th className={styles.tableName}>Amount</th>
                    <th className={styles.tableName}>Currency</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {items.map(item =>
                    <tr className={styles.tableRow} key={item.id}>
                        <td className={styles.tableList}>{item.type}</td>
                        <td className={styles.tableList}>{item.amount}</td>
                        <td className={styles.tableList}>{item.currency}</td>
                    </tr>
                )}

            </tbody>

        </table>
    )
}

export default TransactionHistory;