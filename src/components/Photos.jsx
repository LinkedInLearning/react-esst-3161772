import { Link, Route, Routes } from "react-router-dom";

export function Photos(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
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
        }
      ></Route>

      <Route
        path=":id"
        element={
          <>
            <h2>Futo</h2>
            <p>Hier sind ein paar tolle Fotos:</p>

            {props.imageIds.slice(0, 1).map((id) => (
              <img
                key={id}
                alt=""
                width="100%"
                src={`https://picsum.photos/id/${id}/460/240`}
              />
            ))}
          </>
        }
      ></Route>
    </Routes>
  );
}
