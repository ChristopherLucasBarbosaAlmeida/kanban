import { useState } from "react";
import { Button, Column, CreateTaskModal, Navigation } from "./components";
import boards from "../db.json";
import styles from "./styles.module.scss";

export default function App() {
  const [show, setShow] = useState(false);

  function onDismiss() {
    setShow((show) => !show);
  }

  return (
    <>
      <main className={styles.container}>
        <Navigation />
        <div>
          <header>
            <h1>Platforma Launch</h1>
            <Button onClick={() => setShow(true)}>+ Add New Task</Button>
          </header>
          <div>
            {boards.map((d, i) => (
              <Column name={d.name} tasks={d.tasks} key={i} />
            ))}
          </div>
        </div>
      </main>
      <CreateTaskModal show={show} onDismiss={onDismiss} />
    </>
  );
}
