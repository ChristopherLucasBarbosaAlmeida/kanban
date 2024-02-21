import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { Button, TextField } from "../components";
import { KanbanContext } from "../context/Kanban";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  const [createNewBoard, setCreateNewBoard] = useState(false);

  const { kanban, setKanban } = useContext(KanbanContext);
  const totalBoards = kanban.length;

  const [boardName, setBoardName] = useState("");

  function handleCreateNewBoard() {
    if (!boardName) {
      return;
    }
    setKanban([
      ...kanban,
      { id: window.crypto.randomUUID(), name: boardName, columns: [] },
    ]);
    setBoardName("");
    setCreateNewBoard((prev) => !prev);
  }

  return (
    <main className={styles.container__main}>
      <nav>
        <h1>Kanban</h1>
        <div>
          <span>ALL BOARDS ({totalBoards})</span>
          <ul>
            {kanban.map((k) => (
              <li key={k.id}>
                <NavLink
                  to={`/${k.id}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {k.name}
                </NavLink>
              </li>
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
              <Button variant="secondary" onClick={handleCreateNewBoard}>
                Add
              </Button>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </main>
  );
}
