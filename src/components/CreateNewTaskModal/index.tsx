import { useContext } from "react";
import { Button, Modal, SelectField, TextField } from "..";
import { KanbanContext } from "../../context/Kanban";

type CreateNewTaskModalProps = {
  showCreateNewTaskModal: boolean;
  handleClickModalBackground: () => void;
};

export function CreateNewTaskModal(props: CreateNewTaskModalProps) {
  const { showCreateNewTaskModal, handleClickModalBackground } = props;
  const { kanban, setKanban } = useContext(KanbanContext);

  function handleCreateNewTask() {
    console.log(kanban);
  }

  return (
    <Modal
      isShow={showCreateNewTaskModal}
      handleClickModalBackground={handleClickModalBackground}
    >
      <strong>Add New Task</strong>
      <TextField label="Title" />
      <TextField label="Description" isTextArea />
      <TextField label="Subtasks" />
      <Button variant="secondary">Add New Subtask</Button>
      <SelectField label="Status" />
      <Button variant="primary" onClick={handleCreateNewTask}>
        Create Task
      </Button>
    </Modal>
  );
}
