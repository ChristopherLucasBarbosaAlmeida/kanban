import styles from "./styles.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <h1>Kanban</h1>
      <div>
        <span>ALL BOARDS (8)</span>
        <ul>
          <li>
            <a>Platform Lounch</a>
          </li>
          <li>
            <a>Marketing Plan</a>
          </li>
          <li>
            <a>Roadmap</a>
          </li>
        </ul>
        <a>+ Create New Board</a>
      </div>
      <footer>
        <div></div>
        <span>Hide Sidebar</span>
      </footer>
    </nav>
  );
}
