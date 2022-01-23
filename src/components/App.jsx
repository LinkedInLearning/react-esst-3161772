import React from "react";
import "../styles/global.scss";
import { MemoCard } from "./MemoCard";

export function App() {
  return (
    <>
      <MemoCard
        front="Was ist React?"
        back="Ein universelles JavaScript Framework"
      />
      <MemoCard
        front="Wer ist David Lorenz?"
        back="Eine Person die gerne mit React arbeitet"
      />
      <MemoCard
        front="Wo gibt es leckeres Eis?"
        back="Einfach gefrorene Früchte in den Mixer! Ergo: Zuhause!"
      />
    </>
  );
}
