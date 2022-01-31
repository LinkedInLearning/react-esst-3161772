import React from "react";

/**
 * Nutzen Sie diese Funktion um die Zeit als Text zu formatieren
 */
function formatTime(hours, minutes, seconds, tenthSeconds) {
  const [hoursText, minutesText, secondsText, tenthSecondsText] = [
    hours,
    minutes,
    seconds,
    tenthSeconds,
  ].map((i) => `${i}`.padStart(2, 0));

  return `${hoursText}:${minutesText}:${secondsText} '${tenthSecondsText}`;
}

export function App() {
  const isRunning = false;
  const startTime = new Date().getTime();
  const currentTime = new Date().getTime();
  const timeDelta = currentTime - startTime;
  const totalSeconds = 123456789;
  const tenthSeconds = 99;
  const seconds = 56;
  const minutes = 34;
  const hours = 12;

  // Tipp:
  // Schritt 1: Stunden, Minuten, Sekunden, 10-tel Sekunden extrahieren
  // Schritt 2: Buttons
  // Schritt 3: Funktionalität (Button click -> startet Zeitupdate, usw.)

  return (
    <div>
      <h1>Stoppuhr</h1>
      <p>{formatTime(hours, minutes, seconds, tenthSeconds)}</p>
    </div>
  );
}
