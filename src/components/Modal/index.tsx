import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

export function Modal(props: Props) {
  const { children } = props;

  return (
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
  );
}
