import styles from "./styles.module.scss";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task as ITask } from "../../types/Task";
import { Task } from "..";
import { Column as IColumn } from "../../types/Column";

interface Props {
  data: IColumn;
  handleClickTask: (task: ITask) => void;
}

export function Column({ data, handleClickTask }: Props) {
  const { name, tasks } = data;

  return (
    <div className={styles.column}>
      <span>{name}</span>
      {tasks.map((task) => (
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          <Task
            data={task}
            key={task.id}
            handleClickTask={() => handleClickTask(task)}
          />
        </SortableContext>
      ))}
    </div>
  );
}
