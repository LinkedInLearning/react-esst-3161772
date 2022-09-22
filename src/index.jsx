import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Clicker } from "./components/Clicker";

ReactDOM.render(
  <React.StrictMode>
    <Clicker />
  </React.StrictMode>,
  document.getElementById("root")
);
