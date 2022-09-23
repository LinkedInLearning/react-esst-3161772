import React from "react";
import ReactDOM from "react-dom/client";
import "./ClickerStyles.css";
import { Clicker } from "./components/Clicker";

const targetElement = document.getElementById("root");
const root = ReactDOM.createRoot(targetElement);

root.render(<Clicker />);
