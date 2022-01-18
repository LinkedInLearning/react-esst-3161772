import React from "react";
import { Weather } from "./Weather";

export function App() {
  return (
    <div>
      <h1>🌥 Weather:</h1>

      <Weather city="Stuttgart" />
      <Weather city="London" />
      <Weather city="Berlin" />
    </div>
  );
}
