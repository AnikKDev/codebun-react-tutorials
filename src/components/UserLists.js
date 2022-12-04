import React from 'react';
const UserLists = ({ usersList }) => {
    return (
        <div className="bg-gray-400 mx-auto my-24 rounded-md shadow-gray-300 shadow-lg w-1/2">
            <ul className='text-black underline'>
                {usersList.map(user => (
                    <>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default UserLists;