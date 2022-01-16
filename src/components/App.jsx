import React, { useEffect, useState } from "react";

export function App() {
  const [countdown, setCountdown] = useState(10);
  useEffect(() => {
    const ref = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearTimeout(ref);
  }, [countdown]);

  return (
    <div>
      <h1>Countdown</h1>
      <p>{countdown}</p>
      <progress value={countdown} min="0" max="10" />
    </div>
  );
}
