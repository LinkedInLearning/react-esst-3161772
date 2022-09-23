import { useState } from "react";
import { getTimeFromDate } from "../getTimeFromDate";
import { getTimeFromServer } from "../getTimeFromServer";

export function Clicker() {
  const [countClicks, setCountClicks] = useState(0);
  const [updateTime, setUpdateTime] = useState("bisher nie");

  const update = () => {
    // const timeString = getTimeFromDate(new Date());

    getTimeFromServer().then((timeString) => {
      setCountClicks(countClicks + 1);
      setUpdateTime(timeString);
    });
  };

  console.log("Render angefragt");

  return (
    <>
      <p>Anzahl Klicks = {countClicks}</p>
      <p>Zuletzt geklickt = {updateTime}</p>
      <p>
        <button type="button" onClick={update}>
          Klick mich
        </button>
      </p>
    </>
  );
}
