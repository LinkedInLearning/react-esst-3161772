import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { SingleProductList } from "./components/SingleProductList";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SingleProductList />
  </React.StrictMode>
);
