import { ReactNode } from "react";
import styles from "./styles.module.scss";

type SubtaskProps = {
  children: ReactNode;
};

export function Subtask(props: SubtaskProps) {
  const { children } = props;

  return (
    <label className={styles.subtask}>
      <input type="checkbox" />
      {children}
    </label>
  );
}
