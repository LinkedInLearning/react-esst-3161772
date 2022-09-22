import { useId, useState } from "react";

function NameInput() {
  // const randomId = `id-${Math.random().toFixed(7)}`;
  const randomId = useId();

  return (
    <div>
      <label htmlFor={randomId}>Enter your Name: </label>
      <input id={randomId} />
    </div>
  );
}

export function Inputs() {
  const [inputsCount, setInputsCount] = useState(2);

  return (
    <>
      {Array.from({ length: inputsCount }).map((v, index) => {
        return <NameInput key={index} />;
      })}
      <p>
        <button type="button" onClick={() => setInputsCount(inputsCount + 1)}>
          + Neues Input
        </button>
      </p>
    </>
  );
}
