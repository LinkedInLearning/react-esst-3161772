import { Link, useParams } from "react-router-dom";

export default function SinglePhoto() {
  const params = useParams();

  return (
    <>
      <h2>Ein tolles Foto:</h2>
      <Link to="..">Zurück zu allen Fotos</Link>

      <hr />
      <img
        alt=""
        width="100%"
        src={`https://picsum.photos/id/${params.id}/460/240`}
      />
    </>
  );
}
