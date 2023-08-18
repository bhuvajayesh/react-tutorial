import React from "react";
import App from "../App";
import Test from "../pages/Test";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
