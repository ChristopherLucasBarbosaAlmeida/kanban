import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  Button,
  Column,
  CreateNewColumnModal,
  CreateNewTaskModal,
  TaskOverviewModal,
} from "../../components";
import { useContext, useState } from "react";
import { KanbanContext } from "../../context/Kanban";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { Task } from "../../types/Task";

export function Board() {
  const { kanban } = useContext(KanbanContext);

  const { id } = useParams();

  const board = kanban.find((k) => k.id === id);
  const columns = board?.columns ?? [];

  const [createNewTaskModalIsOpen, setCreateNewTaskModalIsOpen] =
    useState(false);
  const [createNewColumnModalIsOpen, setCreateNewColumnModalIsOpen] =
    useState(false);
  const [taskOverviewModalIsOpen, setTaskOverviewModalIsOpen] = useState(false);

  const [selectedTask, setSelectedTask] = useState<Task>();

  function handleClickTask(task: Task) {
    setTaskOverviewModalIsOpen(true);
    setSelectedTask(task);
  }

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
              <Column
                data={column}
                key={column.id}
                handleClickTask={handleClickTask}
              />
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
      <TaskOverviewModal
        taskOverViewModalIsOpen={taskOverviewModalIsOpen}
        handleClickBackGroundeModal={() =>
          setTaskOverviewModalIsOpen((prev) => !prev)
        }
        task={selectedTask}
      />
    </>
  );
}
