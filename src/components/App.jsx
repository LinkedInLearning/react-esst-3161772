import React, { useState } from "react";

export function App() {
  const [quotes, setQuotes] = useState([]);

  const callApi = () => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((quoteObj) => {
        const quote = quoteObj.quote;

        setQuotes((previousArray) => {
          return [...previousArray, quote];
        });
      });
  };

  // RENDER HERE:
  return (
    <React.Fragment>
      {quotes.length === 0 && (
        <p>
          Kanye hat noch nicht gesprochen aber
          <em> David </em> sagt: Vergleiche dich nicht
          mit Anderen denn du bist gut genug!
        </p>
      )}

      <button type="button" onClick={callApi}>
        Call Kanye
      </button>

      {quotes.length > 0 && <h1>Kanye says</h1>}

      {quotes.length > 0 && (
        <ul>
          {quotes.map((quote) => (
            <li>{quote}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}
