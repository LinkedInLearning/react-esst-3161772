import React from "react";

export function App() {
  return (
    <>
      <header>
        <h1>Routing 🔀</h1>
      </header>

      <main>
        <>
          <h2>Home</h2>
          <p>
            Hallo. Mein Name ist David und das hier ist
            die erste Seite!
          </p>
        </>

        <>
          <h2>Fotos</h2>
          <p>Hier sind ein paar tolle Fotos:</p>

          <img
            width="100%"
            src="https://picsum.photos/id/111/460/240"
          />
          <img
            width="100%"
            src="https://picsum.photos/id/211/460/240"
          />
          <img
            width="100%"
            src="https://picsum.photos/id/311/460/240"
          />
        </>
      </main>
    </>
  );
}
