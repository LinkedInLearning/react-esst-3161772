import React from "react";
import ReactDOM from "react-dom";

import "./ClickerStyles.css";
import { Clicker } from "./components/Clicker";

ReactDOM.render(
  <React.StrictMode>
    <Clicker />
  </React.StrictMode>,
  document.getElementById("root")
);
