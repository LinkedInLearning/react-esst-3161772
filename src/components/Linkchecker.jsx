import { useEffect, useState } from "react";

export function Linkchecker() {
  const [link, setLink] = useState("");

  useEffect(() => {
    const mouseover = (event) => {
      const domElem = event.target;
      if (domElem.nodeName === "A") {
        setLink(domElem.href);
      } else {
        setLink("");
      }
    };
    window.addEventListener("mouseover", mouseover);

    return () => {
      window.removeEventListener("mouseover", mouseover);
    };
  }, []);

  return <em>Hovered Link: {link}</em>;
}
