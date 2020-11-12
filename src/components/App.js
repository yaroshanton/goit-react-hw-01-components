import React from 'react';
import Profile from './Profile/Profile'
import user from '../user.json'

export default function App() {
    return (
        <>
            <Profile user={user} />
        </>
    )
}