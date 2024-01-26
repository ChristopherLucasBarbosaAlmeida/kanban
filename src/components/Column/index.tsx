import { Task } from "..";
import styles from "./styles.module.scss";

interface BoardProps {
  name: string;
  tasks: Task[];
}

interface Task {
  title: string;
}

export function Column({ name, tasks }: BoardProps) {
  return (
    <div className={styles.column}>
      <div className={styles.column__heading}>
        <div></div>
        <span>{name}</span>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} />
      ))}
    </div>
  );
}
