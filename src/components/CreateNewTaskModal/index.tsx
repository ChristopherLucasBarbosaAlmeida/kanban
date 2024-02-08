import { Button, Modal, SelectField, TextField } from "..";

export function CreateNewTaskModal() {
  return (
    <Modal>
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
