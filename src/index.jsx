import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { Inputs } from "./components/Inputs";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Inputs />
  </React.StrictMode>
);
