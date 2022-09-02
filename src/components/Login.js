import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import auth from '../firebase.init';
const Login = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };
    if (user) {
        console.log(user)
    };
    if (error) {
        console.log(error)
    };
    return (
        <div className=" flex justify-center lg:min-h-screen items-center">
            <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full lg:w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email" placeholder="email" className="input input-bordered"
                            {...register("email", { required: true })}

                        />
                        <span className="label-text text-error">{errors.email?.type === 'required' && "Email is required"}</span>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input

                            type="password" placeholder="password" className="input input-bordered"
                            {...register("password", { required: true })} />
                        <span className="label-text text-error">{errors.password?.type === 'required' && "Password is required"}</span>


                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn ">Login</button>
                    </div>

                </form>

                <label className="mt-2">
                    Don't have an account?<Link to="/registration" className="btn btn-link text-white underline px-0">Register</Link>
                </label>
            </div>
        </div>
    );
};

export default Login;