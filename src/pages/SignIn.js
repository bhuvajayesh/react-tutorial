import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const submit = () => {
    navigate("/home", { state: { name: name, number: number } });
  };

  return (
    <>
      <form className="p-5 w-1/2 mx-auto">
        <div className="from-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="from-group mb-4">
          <input
            type="number"
            className="form-control"
            placeholder="Mobile"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-success px-4" onClick={submit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
