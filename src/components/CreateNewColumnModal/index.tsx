import { useContext, useState } from "react";
import { Button, Modal, TextField } from "..";
import { BoardContext } from "../../context/BoardContext";

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
  const [name, setName] = useState("");
  const { dispatch } = useContext(BoardContext);

  function handleCreateNewColumn(boardId: string) {
    if (!name) {
      return;
    }

    const payload = {
      boardId,
      name,
    };

    dispatch({
      type: "CREATE_COLUMN",
      payload,
    });
    setName("");
  }

  return (
    <Modal
      isShow={createNewColumnModalIsOpen}
      handleClickModalBackground={handleOpenCreateNewColumnModal}
    >
      <strong>Create a new column</strong>
      <TextField label="Title" onChange={(ev) => setName(ev.target.value)} />
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
