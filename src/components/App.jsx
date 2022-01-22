import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";

export function App() {
  return (
    <>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="https://reactjs.org/">React Docs</a>
        </nav>

        <Hero />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/resources"
            element={"Resources"}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
