export function StatusChanger(props) {
  const newStatus = props.statusText;
  const buttonClicked = () => props.onStatusChange(newStatus);

  return (
    <button type="button" onClick={buttonClicked}>
      {newStatus}
    </button>
  );
}
