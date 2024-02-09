import { ReactNode, useRef } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  isShow: boolean;
  handleClickModalBackground: () => void;
};

export function Modal(props: Props) {
  const { children, isShow = false, handleClickModalBackground } = props;
  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  if (isShow) {
    return (
      <div
        className={styles.modal}
        ref={modalBackgroundRef}
        onClick={(ev) => {
          if (modalBackgroundRef.current === ev.target) {
            handleClickModalBackground();
          }
        }}
      >
        <div>{children}</div>
      </div>
    );
  }
}
