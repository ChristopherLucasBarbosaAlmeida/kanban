import { useContext, useState } from "react";
import { Button, Modal, SelectField, TextField } from "..";
import { KanbanContext } from "../../context/Kanban";
import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { Column } from "../../types/Column";
import { Subtask } from "../../types/Subtask";
import { Task } from "../../types/Task";

type CreateNewTaskModalProps = {
  boardId: string;
  columns: Column[];
  showCreateNewTaskModal: boolean;
  handleClickModalBackground: () => void;
};

export function CreateNewTaskModal(props: CreateNewTaskModalProps) {
  const {
    showCreateNewTaskModal,
    handleClickModalBackground,
    boardId,
    columns,
  } = props;
  const { kanban, setKanban } = useContext(KanbanContext);
  const [title, setTitle] = useState("");
  const [subtaskDescription, setSubtaskDescription] = useState("");
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [selectedColumnId, setSeletedColumnId] = useState("Todo");
  const [description, setDescription] = useState("");

  function handleCreateNewTask() {
    if (!title) return;
    const updated = kanban.map((k) => {
      if (k.id === boardId) {
        const newColumns = k.columns.map((column) => {
          if (column.id === selectedColumnId) {
            return {
              ...column,
              tasks: [
                ...column.tasks,
                {
                  id: window.crypto.randomUUID(),
                  title,
                  description,
                  subtasks,
                } as Task,
              ],
            } as Column;
          }
          return column;
        });
        return { ...k, columns: newColumns };
      }
      return k;
    });
    setKanban(updated);
    setTitle("");
    setDescription("");
    setSubtasks([]);
  }

  function handleCreateSubtasks() {
    if (!subtaskDescription) {
      return;
    }
    setSubtasks((prev) => [
      ...prev,
      {
        id: window.crypto.randomUUID(),
        done: false,
        description: subtaskDescription,
      },
    ]);
    setSubtaskDescription("");
  }

  function handleDeleteSubtask(subtaskId: string) {
    setSubtasks(subtasks.filter((subtask) => subtask.id !== subtaskId));
  }

  function handleUpdatedSubtaskDescription(
    description: string,
    subtaskId: string
  ) {
    setSubtasks(
      subtasks.map((subtask) => {
        if (subtask.id === subtaskId) {
          return {
            ...subtask,
            description,
          };
        }
        return subtask;
      })
    );
  }

  return (
    <Modal
      isShow={showCreateNewTaskModal}
      handleClickModalBackground={handleClickModalBackground}
    >
      <strong>Add New Task</strong>
      <TextField
        label="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <TextField
        label="Description"
        isTextArea
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <div className={styles.container__subtasks}>
        <TextField
          label="Subtasks"
          value={subtaskDescription}
          onChange={(ev) => setSubtaskDescription(ev.target.value)}
        />
        {subtasks.map((subtask) => (
          <div>
            <TextField
              value={subtask.description}
              key={subtask.id}
              onChange={(ev) =>
                handleUpdatedSubtaskDescription(ev.target.value, subtask.id)
              }
            />
            <X onClick={() => handleDeleteSubtask(subtask.id)} />
          </div>
        ))}
        <Button variant="secondary" onClick={handleCreateSubtasks}>
          Add New Subtask
        </Button>
      </div>
      <SelectField
        label="Status"
        onChange={(ev) => setSeletedColumnId(ev!.value)}
        columns={columns}
      />
      <Button variant="primary" onClick={handleCreateNewTask}>
        Create Task
      </Button>
    </Modal>
  );
}
