import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { Tabs } from "./components/Tabs";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>
);
