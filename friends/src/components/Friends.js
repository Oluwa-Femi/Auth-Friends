import React, { useState, useEffect } from 'react';
import axiosAuth from '../resource/Authorization';
import FriendsList from './FriendsList';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);
    useEffect(() => {
        axiosAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriendsList(res.data);
            })
            .catch(err => console.log(err.response));
    }, []);
    return (
        <div>
            <h2>Friends</h2>
            <FriendsList />
            {friendsList.map(friend => {
                return <div key={friend.id}>{friend.name}</div>;
            })}
        </div>
    );
};

export default Friends;