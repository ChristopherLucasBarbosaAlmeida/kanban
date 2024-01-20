import Button from "../../../../common/components/Button";
import Modal from "../../../../common/components/Modal";
import TextField from "../../../../common/components/TextField";
import styles from "./styles.module.scss";
import Select from "react-select";

const options = [
  { value: "todo", label: "Todo" },
  { value: "doing", label: "Doing" },
  { value: "done", label: "Done" },
];

export default function CreateTaskModal({
  show,
  onDismiss,
}: {
  show: boolean;
  onDismiss: () => void;
}) {
  return (
    <Modal show={show} onDismiss={onDismiss}>
      <h1>Add New Task</h1>
      <form className={styles.form}>
        <TextField />
        <TextField />
        <TextField />
        <button>Add New Subtask</button>
        <Select
          options={options}
          isSearchable={false}
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "transparent",
              padding: "8px",
              borderRadius: "8px",
              border: "2px solid rgb(55, 55, 67)",
              fontSize: "1.2em",
              cursor: "pointer",
              ":hover": {
                border: "2px solid rgb(55, 55, 67)",
              },
              "::placeholder": {
                color: "white",
              },
            }),
            option: () => ({
              backgroundColor: "rgb(55, 55, 67)",
              fontSize: "1.2em",
              color: "#fff",
              padding: "16px",
              cursor: "pointer",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: "rgb(100, 95, 198)",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            placeholder: () => ({ color: "#fff" }),
          }}
        />
        <Button>Create Task</Button>
      </form>
    </Modal>
  );
}
