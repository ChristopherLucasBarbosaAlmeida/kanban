import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { Button, TextField } from "../components";
import { BoardContext } from "../context/BoardContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { PanelsLeftBottom } from "lucide-react";

export function Layout() {
  const [createNewBoard, setCreateNewBoard] = useState(false);

  const { boards, dispatch } = useContext(BoardContext);
  const totalBoards = boards.length;

  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleCreateNewBoard() {
    if (!name) {
      return;
    }

    const id = window.crypto.randomUUID();

    const payload = {
      id,
      name,
    };

    dispatch({
      type: "CREATE_BOARD",
      payload,
    });
    setName("");
    setCreateNewBoard(false);
    navigate(`/${id}`);
  }

  return (
    <main className={styles.container__main}>
      <aside>
        <h1>Kanban</h1>
        <span>ALL BOARDS ({totalBoards})</span>
        <nav>
          <ul>
            {boards.map((board) => (
              <li key={board.id}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to={`/${board.id}`}
                >
                  <PanelsLeftBottom />
                  {board.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {!createNewBoard ? (
            <a onClick={() => setCreateNewBoard((prev) => !prev)}>
              <PanelsLeftBottom /> + Create New Board
            </a>
          ) : (
            <div>
              <TextField
                label="Board title"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Button variant="secondary" onClick={handleCreateNewBoard}>
                Add
              </Button>
            </div>
          )}
        </nav>
      </aside>
      <Outlet />
    </main>
  );
}
