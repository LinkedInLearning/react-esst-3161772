import React from "react";

function MyComponent(props) {
  return props.children;
}

export function App() {
  const terms = [
    {
      term: "Firefox",
      description: "Firefox is a Web Browser",
    },
    {
      term: "Spaghetti",
      description: "Spaghetti is Pasta",
    },
  ];
  return (
    <>
      <h1>Fragments</h1>

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

      <MyComponent>
        <p>Hello Learning Cat!</p>
        <p>Hello Learning Mouse!</p>
      </MyComponent>
    </>
  );
}
