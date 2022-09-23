import React from "react";
import ReactDOM from "react-dom";
import "./ClickerStyles.css";
import { Clicker } from "./components/Clicker";

const targetElement = document.getElementById("root");

ReactDOM.render(<Clicker />, targetElement);
