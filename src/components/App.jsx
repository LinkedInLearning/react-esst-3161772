import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "./Home";
import { Resources } from "./Resources";
import { Hero } from "./Hero";
import "../styles/global.scss";

export function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/resources">Resources</Link>
        </nav>

        <Hero />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/resources"
            element={<Resources />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
