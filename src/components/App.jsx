import React from "react";
import { MemoCard } from "./MemoCard";

export function App() {
  return (
    <>
      <MemoCard
        front="Wie kann ich JSX Comments nutzen?"
        back="Indem JavaScript Kommentare genutzt werden :)"
      />
      <MemoCard
        front="Kann JSX innerHTML?"
        back="Ja aber es ist gefährlich!"
      />
    </>
  );
}
