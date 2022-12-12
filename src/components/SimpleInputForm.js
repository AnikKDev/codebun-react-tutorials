import React, { useRef } from "react";

const SimpleInputForm = () => {
  // reference variable for name
  const enteredNameRef = useRef();
  // reference variable for email
  const enteredEmailRef = useRef();

  //   form handling function
  const handleFormSubmission = (e) => {
    e.preventDefault();
    const enteredName = e.target.name.value;
    const enteredEmail = e.target.email.value;
    console.log(enteredName, enteredEmail);
    if (enteredName && enteredEmail) {
      localStorage.setItem("isLoggedIn", "1");
    } else {
      alert("Please fill up all the input fields");
    }
  };

  return (
    <div className="w-2/3 mx-auto">
      <form onSubmit={handleFormSubmission} class="card-body my-20 p-0">
        <div className="form-control items-center lg:items-start">
          <input
            name="name"
            type="text"
            placeholder="user name"
            className="input input-bordered w-full max-w-md "
          />
        </div>
        <div className="form-control items-center lg:items-start">
          <input
            name="email"
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
