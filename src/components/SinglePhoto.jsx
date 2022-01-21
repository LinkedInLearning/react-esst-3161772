import { Link } from "react-router-dom";

export function SinglePhoto(props) {
  return (
    <>
      <h2>Ein tolles Foto:</h2>
      <Link to="..">Zurück</Link>
      <hr />
      <img
        alt=""
        width="100%"
        src={`https://picsum.photos/id/${props.id}/460/240`}
      />
    </>
  );
}
