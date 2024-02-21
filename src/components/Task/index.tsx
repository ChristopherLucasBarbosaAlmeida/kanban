import { CSS } from "@dnd-kit/utilities";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import {} from "@dnd-kit/core";
import { Task as ITask } from "../../types/Task";

type Props = {
  data: ITask;
  handleClickTask: () => void;
};

export function Task({ data, handleClickTask }: Props) {
  const { id, subtasks, title } = data;

  const totalSubtasksCompleted = subtasks.filter(
    (subtask) => subtask.done
  ).length;

  const { setNodeRef, listeners, transform, transition } = useSortable({
    id,
  });

  return (
    <div
      className={styles.task}
      ref={setNodeRef}
      {...listeners}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      onDoubleClick={handleClickTask}
    >
      <strong>{title}</strong>
      <span>
        {totalSubtasksCompleted} of {subtasks.length} subtasks
      </span>
    </div>
  );
}
