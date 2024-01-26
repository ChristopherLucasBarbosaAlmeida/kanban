import styles from "./styles.module.scss";

export function TextField() {
  return (
    <div className={styles.field}>
      <label htmlFor="">Title</label>
      <input type="text" placeholder="e.g. Take coffee break" />
    </div>
  );
}
