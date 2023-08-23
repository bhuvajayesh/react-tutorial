import React from "react";
import App from "../App";
import Test from "../pages/Test";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
