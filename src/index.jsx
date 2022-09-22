import React from "react";
import { createRoot } from "react-dom/client";
import "./ClickerStyles.css";
import { Clicker } from "./components/Clicker";

const root = createRoot(document.getElementById("root"));

root.render(<Clicker />);
