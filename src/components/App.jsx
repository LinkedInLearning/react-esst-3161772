import React, { useMemo } from "react";

export function App() {
  const showXy = false;
  const x = 0;
  const y = 0;

  const xyView = useMemo(() => {
    if (showXy) {
      return (
        <p>
          <strong>X={x}</strong>
          <strong>Y={y}</strong>
        </p>
      );
    }

    return "";
  }, [showXy, x, y]);

  return (
    <div>
      <h1>XY-Viewer</h1>

      <button type="button">On/Off</button>

      {xyView}
    </div>
  );
}
