import React, {
  Suspense,
  useState,
  useTransition,
} from "react";
import { Initial } from "./Initial";

const Lazy = React.lazy(() => import("./Lazy"));

export function Tabs() {
  const [tab, setTab] = useState("initial");
  const [isPending, startTransition] = useTransition();

  const updateTab = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <div className="tabs">
      <nav>
        <button
          type="button"
          className={tab === "initial" && "active"}
          onClick={() => updateTab("initial")}
        >
          Initial
        </button>
        <button
          type="button"
          className={tab === "lazy" && "active"}
          onClick={() => updateTab("lazy")}
        >
          Lazy {isPending ? "(Lade Tab...)" : ""}
        </button>
      </nav>

      <main>
        <Suspense fallback={"Lade View..."}>
          {tab === "initial" && <Initial />}
          {tab === "lazy" && <Lazy />}
        </Suspense>
      </main>
    </div>
  );
}
