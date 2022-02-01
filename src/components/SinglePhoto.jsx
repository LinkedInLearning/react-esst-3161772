import { useState } from "react";
import {
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function SinglePhoto() {
  const params = useParams();
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] =
    useSearchParams();

  const comment = searchParams.get("comment");
  // useSearchParams:
  // https://reactrouter.com/docs/en/v6/examples/search-params

  const buttonClicked = () => {
    setSearchParams({
      comment: inputValue,
    });
  };
  const inputChanged = (inputEvent) => {
    setInputValue(inputEvent.target.value);
  };

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
        <p>{comment}</p>

        <p>
          <input type="text" onInput={inputChanged} />
          <button
            type="button"
            onClick={buttonClicked}
          >
            Kommentar setzen
          </button>
        </p>
      </div>
    </>
  );
}
