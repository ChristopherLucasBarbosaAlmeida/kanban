import { useState } from "react";
import Button from "../../common/components/Button";
import { kanbanData } from "../../common/constants/data";
import Column from "./components/Column";
import Navigation from "./components/Navigation";
import styles from "./styles.module.scss";
import CreateTaskModal from "./components/CreateTaskModal";

export default function Kanban() {
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
            {kanbanData.map((d, i) => (
              <Column name={d.name} tasks={d.tasks} key={i} />
            ))}
          </div>
        </div>
      </main>
      <CreateTaskModal show={show} onDismiss={onDismiss} />
    </>
  );
}
