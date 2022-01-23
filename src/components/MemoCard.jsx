import { useState } from "react";
import styles from "../styles/MemoCard.module.scss";

export function MemoCard(props) {
  const [showBack, setShowBack] = useState(false);
  const { front, back } = props;

  if (front === undefined && back === undefined) {
    throw new Error(
      "Please provide front and back values"
    );
  }

  const toggle = () => setShowBack(!showBack);

  return (
    <div
      data-testid="clickme"
      className={styles.card}
      onClick={toggle}
    >
      <small data-testid="label">
        {showBack ? "Back" : "Front"}
      </small>

      {!showBack && (
        <strong className={styles.cardQuestion}>
          {front}
        </strong>
      )}
      {showBack && (
        <p className={styles.cardAnswer}>{back}</p>
      )}
    </div>
  );
}
