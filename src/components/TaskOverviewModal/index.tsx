import { Modal, Subtask } from "..";
import { Task } from "../../types/Task";
import styles from "./styles.module.scss";

type Props = {
  taskOverViewModalIsOpen: boolean;
  handleClickBackGroundeModal: () => void;
  task?: Task;
};

export function TaskOverviewModal(props: Props) {
  const { taskOverViewModalIsOpen, handleClickBackGroundeModal, task } = props;

  const subtasks = task?.subtasks.length;
  const subtaskCompleted = task?.subtasks.filter(
    (subtask) => subtask.done
  ).length;

  return (
    <Modal
      isShow={taskOverViewModalIsOpen}
      handleClickModalBackground={handleClickBackGroundeModal}
    >
      {!task ? (
        <span>Task not found</span>
      ) : (
        <>
          <strong>{task.title}</strong>
          <p>{task.description}</p>
          <div className={styles.container__subtasks}>
            <span>
              Subtasks ({subtaskCompleted} of {subtasks})
            </span>
            {task.subtasks.map((subtask) => (
              <Subtask key={subtask.id}>{subtask.description}</Subtask>
            ))}
          </div>
        </>
      )}
    </Modal>
  );
}
