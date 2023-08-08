import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import Routing from "../src/routes/root";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routing />);
