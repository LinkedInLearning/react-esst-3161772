import React, { useState } from "react";

export function App() {
  const [headline, setHeadline] = useState("");
  const [inputValue, setInputValue] = useState("");

  const buttonClicked = () => {
    setHeadline(inputValue);
  };

  const inputChanged = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>{headline}</h1>
      <input type="text" onInput={inputChanged} />
      <br />
      <button type="button" onClick={buttonClicked}>
        Make me big!
      </button>
    </div>
  );
}
