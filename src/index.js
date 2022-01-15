import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

const nameObj = {
  prename: "David",
  lastname: "Lorenz",
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
