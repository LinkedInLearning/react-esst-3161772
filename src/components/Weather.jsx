export function Weather(props) {
  const weatherText = "N/A";

  return (
    <p>
      <strong>{props.city}</strong>: {weatherText}
    </p>
  );
}
