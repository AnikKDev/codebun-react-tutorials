import React, { useState } from 'react';

const FormValidation = () => {
    // state for get the password
    const [password, setPassword] = useState('');
    // state for getting confirm password
    const [confirmPassword, setConfirmPassword] = useState('');

    // error/success
    const [errorOrSuccess, setErrorOrSuccess] = useState({
        error: true,
        success: false
    });


    // handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        if (!password.length || !confirmPassword.length) {
            setErrorOrSuccess({ error: true, success: false })
        }
        if (password !== confirmPassword) {
            setErrorOrSuccess({ error: true, success: false })
        } else {
            setErrorOrSuccess({ error: false, success: true })
        }
    };
    return (
        <div className="w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="card-body  my-20 p-0">
                <p className="text-error">{errorOrSuccess.error && "Password doesn't match or the field is empty"}</p>
                <p className="text-success">{errorOrSuccess.success && "Password matched"}</p>
                <div className="form-control items-center lg:items-start">
                    <input onChange={e => setPassword(e.target.value)} required type="password" placeholder="password" className="input input-bordered w-full max-w-md " />
                </div>

                <div className="form-control items-center lg:items-start">
                    <input onChange={e => setConfirmPassword(e.target.value)} required type="password" placeholder="confirm password" className="input input-bordered w-full max-w-md " />
                </div>

                <div className="form-control items-center lg:items-start mt-6">
                    <button type="submit" className="btn btn-sm w-full max-w-md">Check Password</button>
                </div>
            </form>

        </div>
    );
};

export default FormValidation;