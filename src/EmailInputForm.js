import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const EmailInputForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j1s0mrs', 'template_6z6xzzy', form.current, 'WiWDMEzH4OOTONo8R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="my-20 flex justify-center items-center">
            {/* heading */}

            <div>
                <h1 className="text-4xl mb-20 text-center">Send Mail</h1>

                {/* input form */}
                <form ref={form} onSubmit={sendEmail} class="card-body p-0">

                    <div className="form-control items-center lg:items-start">
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-md text-xl" name="user_name" />
                    </div>

                    <div className="form-control items-center lg:items-start">
                        <input required type="email" placeholder="Email" className="input input-bordered w-full max-w-md text-xl" name="user_email" />
                    </div>

                    <div className="form-control items-center lg:items-start">
                        <textarea rows="2" cols="200" placeholder="Message" className="input input-bordered w-full max-w-md text-xl" name="message" />
                    </div>

                    <div className="form-control items-center lg:items-start mt-6">
                        <button type="submit" className="btn btn-sm w-full max-w-md">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmailInputForm;