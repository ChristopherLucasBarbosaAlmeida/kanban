import styles from "./styles.module.scss";

type Props = {
  label: string;
  isTextArea?: boolean;
};

export function TextField(props: Props) {
  const { label, isTextArea = false } = props;

  return (
    <label htmlFor={label} className={styles.field}>
      {label}

      {isTextArea ? (
        <textarea id={label} rows={4}></textarea>
      ) : (
        <input id={label} type="text" placeholder="e.g. Take coffee break" />
      )}
    </label>
  );
}
