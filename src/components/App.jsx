import React, { useEffect, useState } from "react";

/**
 * Nutzen Sie diese Funktion um die Zeit als Text zu formatieren
 */
function formatTime(hours, minutes, seconds, hundreds) {
  const [hoursText, minutesText, secondsText, hundredsText] = [
    hours,
    minutes,
    seconds,
    hundreds,
  ].map((i) => `${i}`.padStart(2, 0));

  return `${hoursText}:${minutesText}:${secondsText} '${hundredsText}`;
}

function millisecondsToParts(milliseconds) {
  const secondsFloat = milliseconds / 1000;
  const HOURS_IN_SECONDS = 60 * 60;

  const hours = Math.floor(secondsFloat / HOURS_IN_SECONDS);
  const minutes = Math.floor((secondsFloat % HOURS_IN_SECONDS) / 60);
  const seconds = Math.floor(secondsFloat % 60);
  const hundreds = (secondsFloat % 1).toFixed(2).substring(2);

  return [hours, minutes, seconds, hundreds];
}

export function App() {
  // Schritt 1: Statische Werte verarbeiten
  // Schritt 2: Buttons klickbar machen
  // Schritt 3: Startbutton
  // Schritt 4: Pausebutton
  // Schritt 5: Stopbutton

  const timePassedInMs = 10500; // 10,5 Sekunden

  return (
    <div>
      <h1>Stoppuhr</h1>
      <p>{formatTime(1, 2, 3, 4)}</p>
      <div>
        <button type="button">Start</button>
        <button type="button">Pause</button>
        <button type="button">Stopp</button>
      </div>
    </div>
  );
}
