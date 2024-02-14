import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { Task } from "..";
import styles from "./styles.module.scss";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface Props {
  id: UniqueIdentifier;
  name: string;
  tasks: { id: UniqueIdentifier; title: string }[];
}

export function Column(props: Props) {
  const { id, name, tasks } = props;
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className={styles.column} ref={setNodeRef}>
      <span>{name}</span>
      {tasks.map((task) => (
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          <Task {...task} key={task.id} />
        </SortableContext>
      ))}
    </div>
  );
}
