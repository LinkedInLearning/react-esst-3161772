import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";
import { Home } from "./Home";
import { Photos } from "./Photos";
const SinglePhoto = React.lazy(() => import("./SinglePhoto"));

export function App() {
  const imageIds = ["111", "211", "311", "351", "678"];

  return (
    <BrowserRouter>
      <header>
        <h1>Error Boundaries ⚡️</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/photos">Fotos</Link>
        </nav>
      </header>

      <hr />

      <main>
        <ErrorBoundary>
          <React.Suspense fallback={<div>Lade Component...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photos">
                <Route path="" element={<Photos imageIds={imageIds} />} />

                <Route
                  path=":id"
                  element={
                    <ErrorBoundary>
                      <SinglePhoto />
                    </ErrorBoundary>
                  }
                />
              </Route>
            </Routes>
          </React.Suspense>
        </ErrorBoundary>
      </main>
    </BrowserRouter>
  );
}
