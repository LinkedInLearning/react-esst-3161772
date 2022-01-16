import React, { useState } from "react";

export function App() {
  const [counterState, setCounterState] = useState(0);
  const [counterState2, setCounterState2] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCounterState(counterState + 1);
          setCounterState2(counterState2 + 2);
        }}
      >
        Click me
      </button>
      CounterValue = {counterState}, CounterValue2 = {counterState2}
    </div>
  );
}
