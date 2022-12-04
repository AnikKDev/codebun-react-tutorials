import React, { useRef } from "react";

const SimpleInputForm = () => {
  // reference variable for name
  const enteredNameRef = useRef();
  // reference variable for email
  const enteredEmailRef = useRef();

  //   getting values for name and email from the reference
  const enteredName = enteredNameRef.current.value;
  const enteredEmail = enteredEmailRef.current.value;

  //   form handling function
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log({
      name: enteredName,
      email: enteredEmail,
    });
  };

  return (
    <div className="w-2/3 mx-auto">
      <form onSubmit={handleFormSubmission} class="card-body my-20 p-0">
        <div className="form-control items-center lg:items-start">
          <input
            ref={enteredNameRef}
            type="text"
            placeholder="user name"
            className="input input-bordered w-full max-w-md "
          />
        </div>
        <div className="form-control items-center lg:items-start">
          <input
            ref={enteredEmailRef}
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-md "
          />
        </div>
        <div className="form-control items-center lg:items-start mt-6">
          <button type="submit" className="btn btn-sm w-full max-w-md">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleInputForm;
