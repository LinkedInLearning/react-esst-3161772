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

      <div>
        <h3>Challenge: Kommentar</h3>
        <p>
          Challenge: Ich bin vielleicht ein
          Kommentartext
        </p>

        <p>
          <input type="text" />
          <button type="button">
            Kommentar setzen
          </button>
        </p>
      </div>
    </>
  );
}
