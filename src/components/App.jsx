import React from "react";

export function App() {
  const openModal = () => {
    alert("Open Modal");
  };

  return (
    <>
      <header>
        <h1>Portals</h1>
        <img
          width="100%"
          src="https://picsum.photos/id/255/700/300"
          alt=""
        />
      </header>

      <main>
        <button
          type="button"
          onClick={openModal}
        ></button>
      </main>
    </>
  );
}
