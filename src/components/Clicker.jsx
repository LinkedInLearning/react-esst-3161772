import { useState } from "react";

export function Clicker() {
  const [countClicks, setCountClicks] = useState(0);

  const update = () => {
    setCountClicks(countClicks + 1);
  };

  return (
    <>
      <p>Anzahl Klicks = {countClicks}</p>
      <p>
        <button type="button" onClick={update}>
          Klick mich
        </button>
      </p>
    </>
  );
}
