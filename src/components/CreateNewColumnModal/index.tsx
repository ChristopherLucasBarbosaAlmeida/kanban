import { useContext, useState } from "react";
import { Button, Modal, TextField } from "..";
import { KanbanContext } from "../../context/Kanban";

type Props = {
  boardId: string;
  createNewColumnModalIsOpen: boolean;
  handleOpenCreateNewColumnModal: () => void;
};

export function CreateNewColumnModal(props: Props) {
  const {
    createNewColumnModalIsOpen,
    handleOpenCreateNewColumnModal,
    boardId,
  } = props;
  const [columnName, setConlumnName] = useState("");
  const { kanban, setKanban } = useContext(KanbanContext);

  function handleCreateNewColumn(boardId: string) {
    if (!columnName) {
      return;
    }
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

  return (
    <Modal
      isShow={createNewColumnModalIsOpen}
      handleClickModalBackground={handleOpenCreateNewColumnModal}
    >
      <strong>Create a new column</strong>
      <TextField
        label="Title"
        onChange={(ev) => setConlumnName(ev.target.value)}
      />
      <input type="color" />
      <Button
        variant="primary"
        onClick={() => {
          handleCreateNewColumn(boardId);
        }}
      >
        Create
      </Button>
    </Modal>
  );
}
