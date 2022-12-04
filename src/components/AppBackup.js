import React, { useState } from 'react';
import AddUser from '../AddUser';
import UserLists from './UserLists';

const AppBackup = () => {
    // state for user list
    const [usersList, setUsersList] = useState([]);

    // function for adding a user data to existing user list
    const addUserHandler = (uName, uEmail) => {
        setUsersList((prevData) => {
            return [...prevData, { name: uName, email: uEmail }]
        })
    };
    return (
        <div>
            <AddUser addUserHandler={addUserHandler} />
            <UserLists usersList={usersList} />
        </div>
    );
};

export default AppBackup;