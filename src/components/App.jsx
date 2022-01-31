import React, { useEffect, useState } from "react";

export function App() {
  const isRunning = false;
  const timePlaceholder = "--:--:-- `--";
  const startTime = new Date().getTime();
  const currentTime = new Date().getTime();
  const timeDelta = currentTime - startTime;

  return (
    <div>
      <h1>Stoppuhr</h1>
      <p>{!isRunning ? timePlaceholder : timeDelta}</p>
    </div>
  );
}
