import React from "react";

export function OtherComponent(props) {
  return props.children;
}

export function App() {
  const terms = [
    {
      term: "Firefox",
      description: "Firefox is a Web Browser",
    },
    {
      term: "Mouse",
      description:
        "Is Computer Hardware and an Animal",
    },
  ];

  return (
    <>
      <h1>Fragments &amp; Conditionals</h1>

      <dl>
        {terms.map((termObj) => {
          return (
            <React.Fragment key={termObj.term}>
              <dt>{termObj.term}</dt>
              <dd>{termObj.description}</dd>
            </React.Fragment>
          );
        })}
      </dl>

      <OtherComponent>
        <p>Kind 1</p>
        <p>Kind 2</p>
      </OtherComponent>
    </>
  );
}
