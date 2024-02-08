import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant: keyof typeof variants;
}

const variants = {
  primary: styles.button__primary,
  secondary: styles.button__secondary,
};

export function Button(props: Props) {
  const { children, onClick, variant } = props;

  return (
    <button
      className={`${styles.button} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
