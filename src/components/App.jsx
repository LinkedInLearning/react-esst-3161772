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

export function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          <a href="https://reactjs.org/">React Docs</a>
        </nav>

        <Hero />
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/resources"
          element={<Resources />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
