import { useContext } from "react";
import { OpenToWorkContext } from "../OpenToWorkContext";

export function BusinessProfile(props) {
  // is person open-to-work ?
  const isOpenToWork = useContext(
    OpenToWorkContext
  );
  console.log("isOpenToWork", isOpenToWork);
  let classString = "profile ";

  if (isOpenToWork === true) {
    classString += "open-to-work";
  }

  return (
    <div className={classString}>
      <p>
        <strong>{props.name}</strong>
      </p>
      <p>
        <small>{props.job}</small>
      </p>
    </div>
  );
}
