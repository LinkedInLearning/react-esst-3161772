export function Modal(props) {
  const modalText = props.modalText;

  return (
    <div className="modal">
      <strong>{modalText}</strong>
    </div>
  );
}
