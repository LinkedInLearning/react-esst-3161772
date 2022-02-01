import React, { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [showXy, setShowXy] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mousemove = useCallback((mouseEvent) => {
    setX(mouseEvent.x);
    setY(mouseEvent.y);
  }, []);
  const keyup = useCallback((keyEvent) => {
    if (keyEvent.key === "Escape") {
      setX(0);
      setY(0);
      setShowXy(false);
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("keyup", keyup);
    }
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("keyup", keyup);
    };
  }, [mousemove]);

  const buttonClicked = () => {
    setShowXy(!showXy);

    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("keyup", keyup);

    if (!showXy) {
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("keyup", keyup);
    }
  };

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

      <button type="button" onClick={buttonClicked}>
        On/Off
      </button>

      {xyView}
    </div>
  );
}
