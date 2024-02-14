import { ReactNode, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { Button, Modal, TextField } from "../components";
import { KanbanContext } from "../context/Kanban";

type Prop = {
  children: ReactNode;
  onClick: () => void;
};

export function Layout(props: Prop) {
  const { children, onClick } = props;

  const [createNewBoard, setCreateNewBoard] = useState(false);
  const [showCreateNewColumnModal, setCreateNewColumnModal] = useState(false);

  const { kanban, setKanban } = useContext(KanbanContext);
  const totalBoards = kanban.length;

  const [boardName, setBoardName] = useState("");

  const [columnName, setConlumnName] = useState("");

  function handleCreateNewColumn(boardId: string) {
    const data = kanban.map((k) => {
      if (k.id === boardId) {
        return {
          ...k,
          columns: [
            ...k.columns,
            {
              id: window.crypto.randomUUID(),
              name: columnName,
              tasks: [],
            },
          ],
        };
      }
      return k;
    });
    setKanban(data);
    setConlumnName("");
  }

  function handleCreateNewBoard() {
    setKanban([
      ...kanban,
      { id: window.crypto.randomUUID(), name: boardName, columns: [] },
    ]);

    setBoardName("");
  }

  return (
    <>
      <main className={styles.container__main}>
        <nav>
          <h1>Kanban</h1>
          <div>
            <span>ALL BOARDS ({totalBoards})</span>
            <ul>
              {kanban.map((k) => (
                <li key={k.id}>{k.name}</li>
              ))}
            </ul>
            {!createNewBoard ? (
              <a onClick={() => setCreateNewBoard((prev) => !prev)}>
                + Create New Board
              </a>
            ) : (
              <div>
                <TextField
                  label="Board title"
                  onChange={(ev) => setBoardName(ev.target.value)}
                />
                <Button
                  variant="secondary"
                  onClick={() => {
                    handleCreateNewBoard();
                    setCreateNewBoard((prev) => !prev);
                  }}
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
        <TextField
          label="Title"
          onChange={(ev) => setConlumnName(ev.target.value)}
        />
        <Button variant="primary" onClick={() => handleCreateNewColumn("B1")}>
          Create
        </Button>
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
