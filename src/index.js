import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App name="Learning Cat" coolKid={<p>Cool!</p>}>
      <p>Die Learning Cat ist eine wissbegierige Katze</p>
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
