import React, { useRef } from "react";
import styles from "./styles.module.scss";

export interface Props {
  children: React.ReactNode;
  show: boolean;
  onDismiss: () => void;
}

export default function Modal(props: Props) {
  const { children, show, onDismiss } = props;

  const backgroundRef = useRef(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === backgroundRef.current) {
      onDismiss();
    }
  }

  if (show) {
    return (
      <div
        className={styles.modal}
        onMouseDown={handleClick}
        ref={backgroundRef}
      >
        <div>{children}</div>
      </div>
    );
  }
}
