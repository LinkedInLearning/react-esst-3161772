import React from "react";

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
  const isRunning = false;
  const startTime = new Date().getTime();
  const currentTime = startTime + 5340;
  const timeDelta = currentTime - startTime;
  const milliseconds = 123456778;

  // Tipp:
  // Schritt 1: Stunden, Minuten, Sekunden, 10-tel Sekunden extrahieren
  // Schritt 2: Buttons
  // Schritt 3: Funktionalität (Button click -> startet Zeitupdate, usw.)

  return (
    <div>
      <h1>Stoppuhr</h1>
      <p>{formatTime(1, 2, 3, 4)}</p>
    </div>
  );
}
