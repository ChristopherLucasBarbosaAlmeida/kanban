import Task from "../Task";
import styles from "./styles.module.scss";

interface BoardProps {
  name: string;
  tasks: Task[];
}

interface Task {
  title: string;
}

export default function Column({ name, tasks }: BoardProps) {
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
