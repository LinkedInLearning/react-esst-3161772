import { Link } from "react-router-dom";

export function Photos(props) {
  return (
    <>
      <h2>Fotos</h2>
      <p>Hier sind ein paar tolle Fotos:</p>

      {props.imageIds.map((id) => (
        <Link to={id} key={id}>
          <img
            alt=""
            width="100%"
            src={`https://picsum.photos/id/${id}/460/240`}
          />
        </Link>
      ))}
    </>
  );
}
