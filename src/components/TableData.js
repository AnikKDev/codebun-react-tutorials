import React, { useEffect, useState } from 'react';

const TableData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    // set input value
    const [name, setName] = useState('');
    console.log(name)

    const handleAddUser = () => {
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // handle update
    const [update, setUpdate] = useState('')

    const handleUpdate = (id) => {
        console.log(update)
        // console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name: update })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h1 className="text-4xl text-center my-10">
                Dynamic Data in Table
            </h1>
            {/* add user */}

            {/* button */}


            <div className='w-2/3 mx-auto'>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mx-2" />
                <button onClick={handleAddUser} className="btn my-8">Add User</button>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user =>
                                    <tr>
                                        <th>{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>
                                            <input onChange={(e) => setUpdate(e.target.value)} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mx-2" />
                                            <button onClick={() => handleUpdate(user._id)} className='btn btn-sm'>Update</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TableData;