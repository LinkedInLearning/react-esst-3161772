export function Photos(props) {
  return (
    <>
      <h2>Fotos</h2>
      <p>Hier sind ein paar tolle Fotos:</p>

      {props.imageIds.map((id) => (
        <img
          key={id}
          alt=""
          width="100%"
          src={`https://picsum.photos/id/${id}/460/240`}
        />
      ))}
    </>
  );
}
