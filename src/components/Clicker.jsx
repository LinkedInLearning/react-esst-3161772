import { useState } from "react";


export function Clicker() {
  const [countClicks, setCountClicks] = useState(0);
  const [updateTime, setUpdateTime] = useState('bisher nie');

  return <>
    <p>Anzahl Klicks = {countClicks}</p>
    <p>Zuletzt geklickt = {updateTime}</p>
    <p>
      <button type="button">
        Klick mich
      </button>
    </p>
  </>
}
