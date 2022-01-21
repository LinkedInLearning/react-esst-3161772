import React from "react";
import { Link } from "react-router-dom";
import { Home } from "./Home";
import { Photos } from "./Photos";
import { SinglePhoto } from "./SinglePhoto";

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
        <Home />
        <Photos imageIds={imageIds} />
        <SinglePhoto id={imageIds[2]} />
      </main>
    </>
  );
}
