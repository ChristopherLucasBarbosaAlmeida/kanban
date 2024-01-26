import styles from "./styles.module.scss";

export  function Task({ title }: { title: string }) {
  return (
    <div className={styles.task}>
      <h1>{title}</h1>
      <span>0 of 2 subtasks</span>
    </div>
  );
}
