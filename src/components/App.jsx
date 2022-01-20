import React from "react";

export function App() {
  return (
    <>
      <header>
        <h1>Uncontrolled Forms</h1>
      </header>

      <main>
        <form>
          <fieldset>
            <legend>Persönliche Daten</legend>

            <p>
              <label for="fullname">Name: </label>
              <br />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ihr Name"
              />
            </p>

            <p>
              <label for="birthdate">
                Geburtstag:{" "}
              </label>
              <br />
              <input
                type="date"
                id="birthdate"
                name="birthdate"
              />
            </p>

            <p>
              <button type="submit">
                Formular absenden
              </button>
            </p>
          </fieldset>
        </form>
      </main>
    </>
  );
}
