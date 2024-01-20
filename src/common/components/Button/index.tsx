import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button(props: Props) {
  const { children, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
