import { Button, Modal, SelectField, TextField } from "..";

type CreateNewTaskModalProps = {
  showCreateNewTaskModal: boolean;
  handleClickModalBackground: () => void;
};

export function CreateNewTaskModal(props: CreateNewTaskModalProps) {
  const { showCreateNewTaskModal, handleClickModalBackground } = props;

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
      <Button variant="primary">Create Task</Button>
    </Modal>
  );
}
