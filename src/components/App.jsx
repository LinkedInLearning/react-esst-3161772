import React from "react";

export function App() {
  const imageIds = ["111", "211", "311", "351", "678"];

  return (
    <>
      <header>
        <h1>Routing 🔀</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Fotos</a>
        </nav>
      </header>

      <hr />

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

          {imageIds.map((id) => (
            <img
              key={id}
              alt=""
              width="100%"
              src={`https://picsum.photos/id/${id}/460/240`}
            />
          ))}
        </>
      </main>
    </>
  );
}
