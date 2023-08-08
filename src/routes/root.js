import React from "react";
import App from "../App";
import Test from "../pages/Test";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
