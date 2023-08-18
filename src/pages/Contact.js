import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Contact = () => {
  return (
    <>
      <h1>Contact us page</h1>
      <div className="navbarLink flex gap-[20px]">
        <NavLink exact activeClassName="active" to="/">
          About us
        </NavLink>
        <NavLink exact activeClassName="active" to="/contact">
          Contact us
        </NavLink>
      </div>
    </>
  );
};

export default Contact;
