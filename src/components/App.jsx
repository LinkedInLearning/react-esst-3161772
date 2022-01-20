import React, { useState } from "react";
import { Modal } from "./Modal";

export function App() {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

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
        <p>Lorem Ipsum!</p>

        <button type="button" onClick={openModal}>
          Open a Modal
        </button>

        {isModalOpen && (
          <Modal modalText="Hello Modal!" />
        )}
      </main>
    </>
  );
}
