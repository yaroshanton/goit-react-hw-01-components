import React from 'react';
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList'
import FriendListItem from './FriendList/FriendListItem'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import user from '../user.json'
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json'

export default function App() {
    return (
        <>
            <Profile user={user} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList>
                <FriendListItem friends={friends} />
            </FriendList>
            <TransactionHistory items={transactions} />
        </>
    )
}