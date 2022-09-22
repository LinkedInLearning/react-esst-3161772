import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { ProductList } from "./components/ProductList";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>
);
