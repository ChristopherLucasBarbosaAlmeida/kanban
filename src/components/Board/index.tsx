import { DndContext, closestCorners } from "@dnd-kit/core";
import { Button, Column, CreateNewColumnModal, CreateNewTaskModal } from "..";
import { useContext, useState } from "react";
import { KanbanContext } from "../../context/Kanban";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

export function Board() {
  const { kanban } = useContext(KanbanContext);

  const { id } = useParams();

  const board = kanban.find((k) => k.id === id);
  const columns = board!.columns;

  const [createNewTaskModalIsOpen, setCreateNewTaskModalIsOpen] =
    useState(false);
  const [createNewColumnModalIsOpen, setCreateNewColumnModalIsOpen] =
    useState(false);

  return (
    <>
      <div className={styles.board__container}>
        <header>
          <h1>{board?.name}</h1>
          <Button
            variant="primary"
            onClick={() => setCreateNewTaskModalIsOpen((prev) => !prev)}
          >
            + Add New Task
          </Button>
        </header>
        <div>
          <DndContext collisionDetection={closestCorners}>
            {columns.map((column) => (
              <Column {...column} key={column.id} />
            ))}
          </DndContext>
          <div
            className={styles.column}
            onClick={() => setCreateNewColumnModalIsOpen((prev) => !prev)}
          >
            <span>+ New Column</span>
          </div>
        </div>
      </div>
      <CreateNewColumnModal
        boardId={id!}
        createNewColumnModalIsOpen={createNewColumnModalIsOpen}
        handleOpenCreateNewColumnModal={() =>
          setCreateNewColumnModalIsOpen((prev) => !prev)
        }
      />
      <CreateNewTaskModal
        boardId={id!}
        columns={columns}
        showCreateNewTaskModal={createNewTaskModalIsOpen}
        handleClickModalBackground={() =>
          setCreateNewTaskModalIsOpen((prev) => !prev)
        }
      />
    </>
  );
}
