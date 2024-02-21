import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type Props = {
  label?: string;
  value?: string;
  isTextArea?: boolean;
  onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function TextField(props: Props) {
  const { label, isTextArea = false, value, onChange } = props;

  return (
    <label htmlFor={label} className={styles.field}>
      {label}

      {isTextArea ? (
        <textarea
          onChange={onChange}
          id={label}
          rows={4}
          value={value}
        ></textarea>
      ) : (
        <input
          onChange={onChange}
          id={label}
          type="text"
          value={value}
          placeholder="e.g. Take coffee break"
        />
      )}
    </label>
  );
}
