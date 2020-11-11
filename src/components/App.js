import React from 'react';
import Profile from './Profile'
import user from '../user.json'

export default function App() {
    return (
        <>
            <Profile userData={user} />
        </>
    )
}