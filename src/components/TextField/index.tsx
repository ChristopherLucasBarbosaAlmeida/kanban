import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type Props = {
  label: string;
  isTextArea?: boolean;
  onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function TextField(props: Props) {
  const { label, isTextArea = false, onChange } = props;

  return (
    <label htmlFor={label} className={styles.field}>
      {label}

      {isTextArea ? (
        <textarea onChange={onChange} id={label} rows={4}></textarea>
      ) : (
        <input
          onChange={onChange}
          id={label}
          type="text"
          placeholder="e.g. Take coffee break"
        />
      )}
    </label>
  );
}
