import React, { useState } from "react";

const Registration = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  console.log(submitted, valid);

  const HandleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const HandleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const HandleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <span className="bg-primary text-white py-[12px] px-3">
            Success! Thank you for register
          </span>
        ) : null}
        <div className="from-group">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="form-control py-2"
            value={values.firstName}
            onChange={HandleFirstName}
          />
          {submitted && !values.firstName ? (
            <span className="text-red-600">Please enter a first name</span>
          ) : null}
        </div>
        <div className="from-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="form-control py-2"
            value={values.lastName}
            onChange={HandleLastName}
          />
          {submitted && !values.lastName ? (
            <span className="text-red-600">Please enter a last name</span>
          ) : null}
        </div>
        <div className="from-group">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="form-control py-2"
            value={values.email}
            onChange={HandleEmail}
          />
          {submitted && !values.email ? (
            <span className="text-red-600">Please enter a email address</span>
          ) : null}
        </div>
        <button className="btn btn-success py-2 !text-[20px]">Register</button>
      </form>
    </div>
  );
};

export default Registration;
