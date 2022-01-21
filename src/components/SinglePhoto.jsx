export function SinglePhoto(props) {
  return (
    <>
      <h2>Ein tolles Foto:</h2>
      <a href="#">Zurück zu allen Fotos</a>
      <hr />
      <img
        alt=""
        width="100%"
        src={`https://picsum.photos/id/${props.id}/460/240`}
      />
    </>
  );
}
