import { useContext, useState } from "react";
import { Button, Modal, SelectField, TextField } from "..";
import { KanbanContext } from "../../context/Kanban";

type CreateNewTaskModalProps = {
  showCreateNewTaskModal: boolean;
  handleClickModalBackground: () => void;
};

export function CreateNewTaskModal(props: CreateNewTaskModalProps) {
  const { showCreateNewTaskModal, handleClickModalBackground } = props;
  const { kanban, setKanban } = useContext(KanbanContext);

  const [title, setTitle] = useState("");

  function handleCreateNewTask() {
    const updated = kanban.map((k) => {
      if (k.id === "B1") {
        k.columns.map((column) => {
          if (column.name === "Testing") {
            return {
              ...column,
              tasks: [
                ...column.tasks,
                {
                  id: window.crypto.randomUUID(),
                  title,
                  subtasks: [],
                },
              ],
            };
          }
          return column;
        });
      }
      return k;
    });

    setKanban(updated);
  }

  return (
    <Modal
      isShow={showCreateNewTaskModal}
      handleClickModalBackground={handleClickModalBackground}
    >
      <strong>Add New Task</strong>
      <TextField label="Title" onChange={(ev) => setTitle(ev.target.value)} />
      <TextField
        label="Description"
        isTextArea
        // onChange={(ev) => setDescription(ev.target.value)}
      />
      <TextField label="Subtasks" />
      <Button variant="secondary">Add New Subtask</Button>
      <SelectField label="Status" onChange={(ev) => console.log(ev?.option)} />
      <Button variant="primary" onClick={handleCreateNewTask}>
        Create Task
      </Button>
    </Modal>
  );
}
