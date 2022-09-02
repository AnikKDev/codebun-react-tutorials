import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
const ReactForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log the data to see the input values
        console.log(data)
        const userData = {
            name: data.name,
            email: data.email,
            address: data.address
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    return (
        <div className=" flex justify-center lg:h-screen items-center">
            <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full lg:w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="name" className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="email" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            {...register("address", { required: true })}
                            type="text" placeholder="address" className="input input-bordered" />



                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Send Data</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default ReactForm;