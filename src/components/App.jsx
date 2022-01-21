import React, { Suspense } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./Home";
import { Photos } from "./Photos";
const SinglePhoto = React.lazy(() =>
  import("./SinglePhoto")
);

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
        <Suspense fallback="Loading mate...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos">
              <Route
                path=""
                element={
                  <Photos imageIds={imageIds} />
                }
              />

              <Route
                path=":id"
                element={<SinglePhoto />}
              />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
