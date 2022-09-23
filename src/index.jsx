import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { Products } from "./components/Products";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);
