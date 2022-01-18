import React, { useEffect, useState } from "react";
import { WeatherContext } from "../WeatherContext";
import { Weather } from "./Weather";

export function App() {
  return (
    <div>
      Meine heutigen Tasks:
      <ul>
        <li>React lernen</li>
        <li>Mit dem Hund Gassi gehen</li>
        <li>Obst essen</li>
        <li>Brot kaufen</li>
      </ul>
    </div>
  );
}
