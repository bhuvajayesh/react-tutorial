import React from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <Link to={"/signin"} style={{ color: "#fff" }}>
        Back to signin
      </Link>
      <br />
      <br />
      <span>{location.state.name}</span>
      <br />
      <span>{location.state.number}</span>
    </>
  );
};

export default Home;
