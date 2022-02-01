import React, { useState } from "react";

export function App() {
  const [formData, setFormData] = useState({});
  const [showDate, setShowDate] = useState(true);

  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const formSubmitted = (submitEvent) => {
    submitEvent.preventDefault();

    setFormData({ fullname, birthdate });
  };

  const fullnameChanged = (event) => {
    setFullname(event.target.value);
  };

  const birthdateChanged = (event) => {
    setBirthdate(event.target.value);
  };

  return (
    <>
      <header>
        <h1>Controlled Forms ✅</h1>
      </header>

      <main>
        <form onSubmit={formSubmitted}>
          <fieldset>
            <legend>Persönliche Daten</legend>

            <p>
              <label htmlFor="fullname">Name:</label>
              <br />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ihr Name"
                value={fullname}
                onInput={fullnameChanged}
              />
            </p>

            {showDate && (
              <p>
                <label htmlFor="birthdate">
                  Geburtstag:
                </label>
                <br />
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  onInput={birthdateChanged}
                  value={birthdate}
                />
              </p>
            )}

            <button
              type="button"
              onClick={() => setShowDate(!showDate)}
            >
              Geburtstag an/aus
            </button>

            <p>
              <label htmlFor="mySelect">
                Select-Feld:
              </label>
              <br />
              [Select]
            </p>

            <p>
              <button type="submit">
                Formular absenden
              </button>
            </p>
          </fieldset>
        </form>

        <h2>Abgesendete Daten:</h2>
        {JSON.stringify(formData)}
      </main>
    </>
  );
}
