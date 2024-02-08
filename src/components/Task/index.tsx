import { CSS } from "@dnd-kit/utilities";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { UniqueIdentifier } from "@dnd-kit/core";

type Props = {
  id: UniqueIdentifier;
  title: string;
};

export function Task(props: Props) {
  const { id, title } = props;

  const { setNodeRef, listeners, transform, transition } = useSortable({
    id,
  });

  return (
    <div
      className={styles.task}
      ref={setNodeRef}
      {...listeners}
      style={{ transform: CSS.Translate.toString(transform), transition }}
    >
      <strong>{title}</strong>
      <span>0 of 2 subtasks</span>
    </div>
  );
}
