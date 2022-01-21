import React from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./Home";
import { Photos } from "./Photos";
import { SinglePhoto } from "./SinglePhoto";

export function App() {
  const imageIds = ["111", "211", "311", "351", "678"];

  return (
    <BrowserRouter>
      <header>
        <h1>Routing 🔀</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/photos">Fotos</Link>
        </nav>
      </header>

      <hr />

      <main>
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="/photos" element={<Outlet />}>
            <Route
              path=""
              element={<Photos imageIds={imageIds} />}
            />
            <Route
              path="single"
              element={
                <SinglePhoto id={imageIds[2]} />
              }
            />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
