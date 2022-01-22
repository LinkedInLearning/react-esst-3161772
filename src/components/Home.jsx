import styles from "../styles/Home.module.scss";

export function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <p>React ist ein wirklich starkes Framework!</p>
      <p>
        Deswegen möchte Ich Ihnen auf dieser Seite
        einige Infos und Links zur Verfügung stellen
      </p>

      <aside className={styles["side-info"]}>
        Kennen Sie auch
        <a href="https://nextjs.org/">NextJS</a>?
        <img width="100" src="./nextjs-logo.png" />
      </aside>
    </div>
  );
}
