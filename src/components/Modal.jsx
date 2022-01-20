import ReactDOM from "react-dom";

export function Modal(props) {
  const modalText = props.modalText;

  return ReactDOM.createPortal(
    <div className="modal">
      <strong>{modalText}</strong>
    </div>,
    document.getElementById("outside")
  );
}
