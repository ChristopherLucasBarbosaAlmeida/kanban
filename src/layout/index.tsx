import { ReactNode, useState } from "react";
import styles from "./styles.module.scss";
import { Button, Modal, TextField } from "../components";

type Prop = {
  children: ReactNode;
  onClick: () => void;
};

export function Layout(props: Prop) {
  const { children, onClick } = props;

  const [createNewBoard, setCreateNewBoard] = useState(false);
  const [showCreateNewColumnModal, setCreateNewColumnModal] = useState(false);

  return (
    <>
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
            {!createNewBoard ? (
              <a onClick={() => setCreateNewBoard((prev) => !prev)}>
                + Create New Board
              </a>
            ) : (
              <div>
                <TextField label="Board title" />
                <Button
                  variant="secondary"
                  onClick={() => setCreateNewBoard((prev) => !prev)}
                >
                  Add
                </Button>
              </div>
            )}
          </div>
        </nav>
        <div>
          <header>
            <h1>Platforma Launch</h1>
            <Button variant="primary" onClick={onClick}>
              + Add New Task
            </Button>
          </header>
          <div>
            {children}
            <div
              className={styles.column}
              onClick={() => setCreateNewColumnModal((prev) => !prev)}
            >
              <span>+ New Column</span>
            </div>
          </div>
        </div>
      </main>
      <Modal
        isShow={showCreateNewColumnModal}
        handleClickModalBackground={() =>
          setCreateNewColumnModal((prev) => !prev)
        }
      >
        <strong>Create a new column</strong>
        <TextField label="Title" />
        <Button variant="primary">Create</Button>
        <Button
          variant="secondary"
          onClick={() => setCreateNewColumnModal((prev) => !prev)}
        >
          Cancel
        </Button>
      </Modal>
    </>
  );
}
