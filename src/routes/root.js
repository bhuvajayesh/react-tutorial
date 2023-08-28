import React from "react";
import App from "../App";
import Test from "../pages/Test";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import NewPractice from "../pages/NewPractice";
import Registration from "../pages/Registration";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/practice" element={<NewPractice />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
