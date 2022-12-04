import React, { useState, useEffect } from 'react';

const Validation = () => {
    const [validate, setValidate] = useState(false);

    // state for username
    const [userName, setUserName] = useState('');
    const checkRegexForUsername = (/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/).test(userName);
    // state for email
    const [email, setEmail] = useState('')
    const checkRegexForEmail = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);

    // state for password
    const [password, setPassword] = useState('');
    const checkRegexForPassword = (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).test(password);

    // state for date
    const [date, setDate] = useState('');

    useEffect(() => {
        if (!checkRegexForUsername || !checkRegexForEmail || !checkRegexForPassword || !date) {
            setValidate(false);
        } else {
            setValidate(true)
        }
    }, [checkRegexForUsername, checkRegexForEmail, checkRegexForPassword, date])

    return (
        <div className="w-2/3 mx-auto">
            <form class="card-body  my-20 p-0">

                <div className="form-control items-center lg:items-start">
                    <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="user name" className="input input-bordered w-full max-w-md " />
                </div>

                <div className="form-control items-center lg:items-start">
                    <input onChange={e => setPassword(e.target.value)} required type="password" placeholder="password" className="input input-bordered w-full max-w-md " />
                </div>

                <div className="form-control items-center lg:items-start">
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered w-full max-w-md " />
                </div>
                <div className="form-control items-center lg:items-start">
                    <input onChange={e => setDate(e.target.value)} type="date" placeholder="DOB" className="input input-bordered w-full max-w-md " />
                </div>

                <div className="form-control items-center lg:items-start mt-6">
                    <button disabled={!validate} type="submit" className="btn btn-sm w-full max-w-md">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Validation;