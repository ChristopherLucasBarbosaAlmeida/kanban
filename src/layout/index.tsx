import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Button } from "../components";

type Prop = {
  children: ReactNode;
};

export function Layout(props: Prop) {
  const { children } = props;

  return (
    <main className={styles.container__main}>
      <nav>
        <h1>Kanban</h1>
        <div>
          <span>ALL BOARDS (8)</span>
          <ul>
            <li>
              <a>Platform Lounch</a>
            </li>
          </ul>
          <a>+ Create New Board</a>
        </div>
        <footer>
          <div></div>
          <span>Hide Sidebar</span>
        </footer>
      </nav>
      <div>
        <header>
          <h1>Platforma Launch</h1>
          <Button variant="primary">+ Add New Task</Button>
        </header>
        <div>{children}</div>
      </div>
    </main>
  );
}
