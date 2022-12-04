import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import ErrorModal from './ErrorModal';

const AddUser = ({ addUserHandler }) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    // errors
    const [errors, setErrors] = useState(undefined);
    const handleFormSubmission = e => {
        e.preventDefault();
        if (!userName || !userEmail) {
            setErrors({
                title: 'Name or Email field is invalid',
                message: "Please provide valid info!"
            })
            return;
        };
        setUserEmail('');
        setUserName('');
        addUserHandler(userName, userEmail);
    };


    return (
        <div>
            {errors && <ErrorModal errors={errors} setErrors={setErrors} />}
            <Card className="bg-gray-400 mx-auto my-24 rounded-md shadow-gray-300 shadow-lg w-1/2">
                <form
                    onSubmit={handleFormSubmission}
                    className='border-2 border-gray-400 shadow-lg rounded-md'>
                    <div className='my-4 block mx-auto w-1/2'>
                        <label htmlFor="name"></label>
                        <input
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            className='input input-bordered w-full max-w-xs'
                            id='name' name="name"
                            type="text"
                            placeholder='name'
                        />
                    </div>
                    <div className='my-4 block mx-auto w-1/2'>
                        <label htmlFor="email"></label>
                        <input
                            value={userEmail}
                            onChange={e => setUserEmail(e.target.value)}
                            className='input input-bordered w-full max-w-xs'
                            id='email'
                            name="email"
                            type="email"
                            placeholder='email'
                        />
                    </div>

                    <div className=' my-10 block mx-auto w-1/2'>
                        <Button className='btn' type="submit">Submit</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;